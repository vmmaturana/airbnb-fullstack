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
router.post("/signup", (req, res) => {
  console.log(req.body);
  Users.create(req.body);
});

router.get("/logout", (req, res) => {
  res.redirect("/houses");
});

module.exports = router;
