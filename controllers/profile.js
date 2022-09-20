const express = require("express");
const router = express.Router();

// Get and Patch router paht /

router.get("/", (req, res) => {
  res.render("profile");
});

router.patch("/", (req, res) => {
  res.send("PATCH profile");
});

module.exports = router;
