const express = require("express");
const router = express.Router();

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

router.post("/signup", (req, res) => {
  res.send("Signup Page Post response)");
});

router.get("/logout", (req, res) => {
  res.redirect("/houses");
});

module.exports = router;
