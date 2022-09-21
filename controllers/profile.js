const express = require("express");
const router = express.Router();

// Get and Patch router paht /

router.get("/", (req, res) => {
  let loggedUser = req.user;
  if (req.isAuthenticated()) {
    let loggedUser = req.user;
    res.render("profile", { user: loggedUser });
  } else {
    res.redirect("/auth/login");
  }
});

router.patch("/", (req, res) => {
  res.send("PATCH profile");
});

module.exports = router;
