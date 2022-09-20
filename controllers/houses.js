const express = require("express");
const router = express.Router();

// Routes to the following: (get /), (Get /create), (get /:id), (get /id:/edit), (post /), (patch /:id), (delete /:id)

router.get("/", (req, res) => {
  res.render("/");
});

router.get("/create", (req, res) => {
  res.render("create");
});

router.get("/:id", (req, res) => {});

router.get("/:id/edit", (req, res) => {});

router.post("/", (req, res) => {});

router.patch("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
