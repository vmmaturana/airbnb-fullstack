const express = require("express");
const router = express.Router();

// GET SEND MESSAGE TO BROWSER

router.get("/", (req, res) => {
  res.send("Hello World");
});

// NESTED CONTROLLERS - {get/login}, {get/signup}, {post/login}, {post/signup}, {get/logout}

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  res.render("login");
});

router.get("/logout", (req, res) => {
  res.render("logout");
});

module.exports = router;
