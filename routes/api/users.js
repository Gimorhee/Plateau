const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

const User = require("../../models/User");

router.get("/", (req, res) => {
  res.send("Users API!");
});

// Create User
router.post(
  "/",
  [
    check("firstName", "First Name is required")
      .not()
      .isEmpty(),
    check("lastName", "Last Name is required")
      .not()
      .isEmpty(),
    check("email", "Invalid Email address").isEmail(),
    check("password", "Invalid Password").isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: "User already exists" });
      }

      const newUser = {
        firstName,
        lastName,
        email,
        password
      };

      const salt = await bcrypt.genSaltSync(10);
      newUser.password = await bcrypt.hashSync(password, salt);

      user = await new User(newUser);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "1h" },
        (err, token) => {
            if(err) throw (err);
            res.json({ token })
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
