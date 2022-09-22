const express = require("express");
const router = express.Router();

// Get and Patch router paht /

router.get("/", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.render("profile", { user: loggedUser });
  }
});

router.patch("/", (req, res) => {
  res.send("PATCH profile");
});

module.exports = router;
