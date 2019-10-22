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

// @route   GET api/items/outer
// @desc    Get all outers
// @access  Public
router.get("/outer", async (req, res) => {
  try {
    let outers = await Item.find({ type: "outer" });

    if (outers.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No items registered as outer" }] });
    }

    res.send(outers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/items/top
// @desc    Get all tops
// @access  Public
router.get("/top", async (req, res) => {
  try {
    let tops = await Item.find({ type: "top" });

    if (tops.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No items registered as top" }] });
    }

    res.send(tops);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/items/shirts
// @desc    Get all shirts
// @access  Public
router.get("/shirts", async (req, res) => {
  try {
    let shirts = await Item.find({ type: "shirts" });

    if (shirts.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No items registered as shirts" }] });
    }

    res.send(shirts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/items/pants
// @desc    Get all pants
// @access  Public
router.get("/pants", async (req, res) => {
  try {
    let pants = await Item.find({ type: "pants" });

    if (pants.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No items registered as pants" }] });
    }

    res.send(pants);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/items/shoes
// @desc    Get all shoes
// @access  Public
router.get("/shoes", async (req, res) => {
  try {
    let shoes = await Item.find({ type: "shoes" });

    if (shoes.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No items registered as shoes" }] });
    }

    res.send(shoes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/items/accessory
// @desc    Get all accessories
// @access  Public
router.get("/accessory", async (req, res) => {
  try {
    let accessory = await Item.find({ type: "accessory" });

    if (accessory.length === 0) {
      return res
        .status(400)
        .json({ errors: [{ msg: "No items registered as accessory" }] });
    }

    res.send(accessory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   GET api/items/:id
// @desc    Get a specific item by Id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    let outer = await Item.findById(req.params.id);

    if(!outer) {
      return res.status(400).json({ errors: [{ msg: "No Item Found" }] });
    }

    res.send(outer);
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
        return res
          .status(400)
          .json({ errors: [{ msg: "Item already exists!" }] });
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
    const { name, price, image, type } = req.body;

    let item = await Item.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $set: {
          name,
          price,
          image,
          type
        }
      }
    );

    if (!item) {
      return res.status(400).json({ msg: "Item not found" });
    }

    await item.save();

    res.send("Item successfully updated");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
