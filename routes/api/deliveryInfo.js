const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const request = require("request");
const config = require("config");

const User = require("../../models/User");
const DevliveryInfo = require("../../models/DeliveryInfo");

// @route   GET api/delivery
// @desc    Get all delivery info
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    let deliveryInfo = await DeliveryInfo.find();

    if (deliveryInfo.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No Delivery Information Found! " }] });
    }

    res.send(deliveryInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/delivery/add
// @desc    Add delivery information
// @access  Private
router.post(
  "/add",
  [
    auth,
    check("address", "Address is required")
      .not()
      .isEmpty(),
    check("city", "City is required")
      .not()
      .isEmpty(),
    check("zip", "ZIP is required")
      .not()
      .isEmpty(),
    check("phone", "Phone number is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { address, city, zip, phone } = req.body;

    try {
      let deliveryInfo = await DeliveryInfo.findOne({ user: req.user.id });

      if (deliveryInfo) {
        return res.status(400).send("Deliver Info already entered");
      }

      const newDeliveryInfo = await new DeliveryInfo({
        user: req.user.id,
        address,
        city,
        zip,
        phone
      });

      const delivery = await newDeliveryInfo.save();

      res.json(delivery);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   PUT api/delivery/edit
// @desc    Edit delivery information
// @access  Private
router.put(
  "/edit",
  [
    auth,
    check("address", "Address is required")
      .not()
      .isEmpty(),
    check("city", "City is required")
      .not()
      .isEmpty(),
    check("zip", "ZIP is required")
      .not()
      .isEmpty(),
    check("phone", "Phone number is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { address, city, zip, phone } = req.body;

    const newDeliveryInfo = {
      address,
      city,
      zip,
      phone
    };

    try {
      let deliveryInfo = await DeliveryInfo.findOne({ user: req.user.id });

      deliveryInfo = await DeliveryInfo.findOneAndUpdate(
        { user: req.user.id },
        { $set: newDeliveryInfo },
        { new: true }
      );

      return res.json(deliveryInfo);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
