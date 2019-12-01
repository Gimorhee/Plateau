const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const request = require("request");
const config = require("config");

const User = require("../../models/User");
const Payment = require("../../models/Payment");

// @route   POST api/payment/add
// @desc    Add or Update payment information
// @access  Private
router.post(
  "/add",
  [
    auth,
    check("nameoncard", "Card holder name must be provided")
      .not()
      .isEmpty(),
    check("cardnumber", "Card number must be provided")
      .not()
      .isEmpty(),
    check("expmonth", "Expiration Month must be provided")
      .not()
      .isEmpty(),
    check("expyear", "Expiration Year must be provided")
      .not()
      .isEmpty(),
    check("cvv", "CVV must be provided")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nameoncard, cardnumber, expmonth, expyear, cvv } = req.body;

    const masterCardRegex = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

    // Payment Information Validation
    if (!(masterCardRegex.test(cardnumber) || visaRegex.test(cardnumber))) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Invalid Credit Card Number." }] });
    }

    if (Number(expmonth) < 1 || Number(expmonth) > 12) {
        return res
        .status(400)
        .json({ errors: [{ msg: "Invalid Expiration Month." }] });
    }

    if (expyear < new Date().getFullYear()) {
        return res
        .status(400)
        .json({ errors: [{ msg: "Invalid Expiration Year." }] });
    }

    if (cvv.toString().length !== 3) {
        return res
        .status(400)
        .json({ errors: [{ msg: "Invalid CVV number." }] });
    }

    try {
        let paymentInfo = await Payment.findOne({ user: req.user.id });

        let infoFields = {
            nameoncard,
            cardnumber,
            expmonth,
            expyear,
            cvv
        }

        if (paymentInfo) {
            paymentInfo = await Payment.findOneAndUpdate(
                { user: req.user.id },
                { $set: infoFields },
                { new: true } 
            )

            return res.json(paymentInfo);
        }

        const newPaymentInfo = await new Payment({
            user: req.user.id,
            nameoncard,
            cardnumber,
            expmonth,
            expyear,
            cvv
        });

        const payment = await newPaymentInfo.save();
        res.json(payment); 
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
  }
);

module.exports = router;
