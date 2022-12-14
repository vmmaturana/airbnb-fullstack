const express = require("express");
const router = express.Router();

// Models
const Houses = require("../models/houses");
const Bookings = require("../models/bookings");

// RENDER WESBSITE DE HOUSES (LIST) CONTROLLER
router.get("/", async (req, res, next) => {
  let loggedUser = req.user;
  let query = {};
  let houses = await Houses.find({});
  //Location filter
  console.log(req.query.location);
  if (req.query.location) {
    query.location = req.query.location;
  }
  // Rooms filter
  if (req.query.rooms) {
    query.rooms = req.query.rooms;
  }
  // Max Price FILTER (MEJORAR ESTE QUERY)
  if (req.query.maxPrice) {
    query.maxPrice = req.query.maxPrice;
  }

  //AGREGAR QUERI DE  DROPDOWN Y SEARCH

  console.log("ABAJO HAY QUERY");
  console.log(query);
  houses = await Houses.find(query);
  console.log("ABAJO HAY HOUESES");
  console.log(houses);

  res.render("houses/list", { user: loggedUser, houses });
});

// GET CREATE HOUSE CONTROLLER
router.get("/create", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.render("houses/create", { user: loggedUser });
  }
});

// ONE HOUSE CONTROLLER
router.get("/:id", async (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    console.log(req.params.id);
    let house = await Houses.findById(req.params.id);
    console.log(house);
    res.render("houses/one", { user: loggedUser, house });
  }
});

// EDIT HOUSE CONTROLLER
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
    req.body.host = loggedUser._id;
    let house = await Houses.create(req.body);
    res.redirect(`/houses/${house._id}`);
  }
});

//
router.patch("/:id", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.send("HOUSES PATCH MSGE");
  }
});

//
router.delete("/:id", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.send("HOUSES DELETE MSGE");
  }
});

module.exports = router;
