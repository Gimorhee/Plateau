const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");
const Order = require("../../models/Order");

router.get("/", (req, res) => {
    console.log("testing");
    res.send("testing")
});

router.post(
    "/complete",
    [
      auth,
      check("items", "Items cannot be empty")
        .not()
        .isEmpty(),
      check("total", "Total price must be provided")
        .not()
        .isEmpty()
    ],
    async (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { items, total } = req.body;
  
      const newOrder = {
        items,
        total
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