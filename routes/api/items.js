const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Item = require("../../models/Item");

router.get("/", (req, res) => {
  res.send("Items API");
});

// @route   POST api/items
// @desc    Register a item
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("price", "Price is required")
      .not()
      .isEmpty(),
    check("image", "Image is required")
      .not()
      .isEmpty(),
    check("type", "Type is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price, image, type } = req.body;

    try {
      const newItem = {
        name,
        price,
        image,
        type
      };

      // Register Item
      let item = new Item(newItem);

      // Save Item
      await item.save();

      res.json(item);
      
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
  }
);

module.exports = router;
