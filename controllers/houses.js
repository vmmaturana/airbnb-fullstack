const express = require("express");
const router = express.Router();

// Models
const Houses = require("../models/houses");
const Bookings = require("../models/bookings");

// INCLUIR EL IF DE AUTHENTHIFICATION

router.get("/", (req, res) => {
  let loggedUser = req.user;
  res.render("houses/list", { user: loggedUser });
});

router.get("/:id/create", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.render("houses/create", { user: loggedUser });
  }
});

router.get("/:id", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.render("houses/one", { user: loggedUser });
  }
});

router.get("/:id/edit", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.render("houses/edit", { user: loggedUser });
  }
});

// ROUTER DEL POST DE CREATE A HOUSE
router.post("/", async (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    console.log(req.body);
    req.body.host = loggedUser._id;
    let house = await Houses.create(req.body);
    console.log(house._id);
    res.send(`/houses/${house._id}`);
  }
});

router.patch("/:id", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.send("HOUSES PATCH MSGE");
  }
});

router.delete("/:id", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.send("HOUSES DELETE MSGE");
  }
});

module.exports = router;
