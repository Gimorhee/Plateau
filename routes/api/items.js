const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get("/", async (req, res) => {
  try {
    let items = await Item.find();

    res.send(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
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
        let item = await Item.findOne({ name });

        if (item) {
            return res.status(400).json({ errors: [{ msg: "Item already exists!" }] });
        }
      const newItem = {
        name,
        price,
        image,
        type
      };

      // Register Item
      item = new Item(newItem);

      // Save Item
      await item.save();

      res.json(item);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
  }
);

// @route   PUT api/items/update
// @desc    Modify a item info
// @access  Public
router.put("/update/:id", async (req, res) => {
    try {
        let item = await Item.findById(req.params.id);

        if (!item) {
            return res.status(400).json({ msg: "Item not found" });
        }

        const { name, price, image, type } = req.body;

        item.name = name;
        item.price = price;
        item.image = image;
        item.type = type;

        await item.save();

        res.send("Item successfully updated");

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
})

module.exports = router;
