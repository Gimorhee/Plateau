const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
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
        let order = await Order.findOne({ user: req.user.id });
  
        if (!order) {
          order = new Order({ user: req.user.id });
        }
  
        order.orders.unshift(newOrder);
  
        await order.save();
  
        res.json(order);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  );
  

module.exports = router;