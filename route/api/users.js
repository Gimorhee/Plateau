const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("Users API!");
});

router.post("/users", (req, res) => {

})

module.exports = router;