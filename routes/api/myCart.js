const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const request = require("request");
const config = require("config");

const User = require("../../models/User");
const MyCart = require("../../models/MyCart");

// @route   GET api/myCart
// @desc    Get all myCart data
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    let myCart = await MyCart.find().populate("user", ["firstName"]);

    if (myCart.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No items/orders found in MyCart" }] });
    }

    res.json(myCart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/myCart/me
// @desc    Get current users MyCart Data
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const myCart = await MyCart.findOne({ user: req.user.id }).populate(
      "user",
      ["firstName"]
    );

    if (!myCart) {
      return res
        .status(400)
        .json({ msg: "There is no items in this user's MyCart" });
    }

    res.json(myCart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/myCart/add
// @desc    Create a item in MyCart
// @access  Private
router.post(
  "/add",
  [
    auth,
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("price", "Price is required")
      .not()
      .isEmpty(),
    check("size", "Size is Required")
      .not()
      .isEmpty(),
    check("image", "Image is required")
      .not()
      .isEmpty(),
    check("type", "Type is required")
      .not()
      .isEmpty(),
    check("quantity", "Quantity is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price, size, image, type, quantity } = req.body;

    const newItem = {
      name,
      price,
      size,
      image,
      type,
      quantity
    };

    try {
      let myCart = await MyCart.findOne({ user: req.user.id });

      if (!myCart) {
        myCart = new MyCart({ user: req.user.id });
      }

      myCart.items.unshift(newItem);

      await myCart.save();

      res.json(myCart);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   DELETE api/myCart/item/:itemId
// @desc    Delete MyCart Item
// @access  Private
router.delete("/item/:itemId", auth, async (req, res) => {
  try {
    let myCart = await MyCart.findOne({ user: req.user.id });

    const removeIndex = myCart.items
      .map(item => item.id)
      .indexOf(req.params.itemId);

    myCart.items.splice(removeIndex, 1);

    await myCart.save();

    res.json(myCart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/myCart/item/:itemId
// @desc    Edit MyCart Item Quantity
// @access  Private
router.put("/item/:itemId", [
  auth,
  check("quantity", "Quantity is required")
  .not()
  .isEmpty()
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    let myCart = await MyCart.findOne({ user: req.user.id });

    const { quantity } = req.body;

    const editIndex = myCart.items
    .map(item => item.id)
    .indexOf(req.params.itemId);

    myCart.items[editIndex].quantity = quantity;

    await myCart.save();

    res.json(myCart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
