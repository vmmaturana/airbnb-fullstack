const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

// Get and Patch router paht /

router.get("/", (req, res) => {});

router.patch("/", (req, res) => {});

module.exports = router;
