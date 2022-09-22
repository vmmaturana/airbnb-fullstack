const express = require("express");
const router = express.Router();

// Routes to the following: (get /), (Get /create), (get /:id), (get /id:/edit), (post /), (patch /:id), (delete /:id)

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

router.post("/", (req, res) => {
  let loggedUser = req.user;
  if (!req.isAuthenticated()) {
    res.redirect("/auth/login");
  } else {
    res.send("HOUSES POST MSGE");
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
