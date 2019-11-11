const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const request = require("request");
const config = require("config");

const User = require("../../models/User");
const Payment = require("../../models/Payment");

router.get("/", (req, res) => {
    console.log("Payment APIs");
    res.send("Payment APIs");
})

module.exports = router;
