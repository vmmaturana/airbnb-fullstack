const express = require("express");
const router = express.Router();
const Users = require("../models/users");

// NESTED CONTROLLERS - {get/login}, {get/signup}, {post/login}, {post/signup}, {get/logout}

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/login", (req, res) => {
  res.send("Login Page Post response)");
});

// Getting the info from the SignUp
router.post("/signup", async (req, res, next) => {
  try {
    let user = await Users.find({ email: req.body.email });
    if (user) {
      throw new Error("User with this email already exists");
    } else {
      await Users.create(req.body);
      res.redirect("/houses");
    }
  } catch (err) {
    next(err);
  }
});

router.get("/logout", (req, res) => {
  res.redirect("/houses");
});

module.exports = router;
