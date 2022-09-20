const express = require("express");
const router = express.Router();

// Routes to the following: (get /), (Get /create), (get /:id), (get /id:/edit), (post /), (patch /:id), (delete /:id)

router.get("/", (req, res) => {
  res.render("houses/list");
});

router.get("/create", (req, res) => {
  res.render("/houses/create");
});

router.get("/:id", (req, res) => {
  res.render("houses/one");
});

router.get("/:id/edit", (req, res) => {
  res.render("houses/edit");
});

router.post("/", (req, res) => {
  res.send("HOUSES POST MSGE");
});

router.patch("/:id", (req, res) => {
  res.send("HOUSES PATCH MSGE");
});

router.delete("/:id", (req, res) => {
  res.send("HOUSES DELETE MSGE");
});

module.exports = router;
