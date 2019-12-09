const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const config = require("config");

const User = require("../../models/User");
const Order = require("../../models/Order");

// @route   POST api/order/email
// @desc    Send an order confirmaiton email to user
// @access  Private
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(config.get("SENDGRID_API_KEY"));

router.post("/email", auth, async (req, res) => {
  try {
    const { to, from, subject, text, html } = req.body;

    const msg = {
      to,
      from,
      subject,
      text,
      html
    };
    
    await sgMail.send(msg);
    
    res.send("Email sent successfully!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/order/complete
// @desc    Complete an order
// @access  Private
router.post(
  "/complete",
  [
    auth,
    check("orderItems", "Items cannot be empty")
      .not()
      .isEmpty(),
    check("orderTotal", "Total price must be provided")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { orderItems, orderTotal } = req.body;

    const newOrder = {
      orderItems,
      orderTotal
    };

    try {
      let myOrder = await Order.findOne({ user: req.user.id });

      if (!myOrder) {
        myOrder = new Order({ user: req.user.id });
      }

      myOrder.orders.unshift(newOrder);

      await myOrder.save();

      res.json(myOrder);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);


module.exports = router;
