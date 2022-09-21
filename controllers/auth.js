const express = require("express");
const router = express.Router();
const Users = require("../models/users");

// NESTED CONTROLLERS - {get/login}, {get/signup}, {post/login}, {post/signup}, {get/logout}

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/login", async (req, res, next) => {
  try {
    let userLogin = await Users.findOne(req.body);
    console.log(userLogin);
    if (!userLogin) {
      throw new Error("Incorrect login data");
    } else {
      req.login(userLogin, (err) => {
        if (err) {
          throw err;
        }
        res.redirect("/houses");
      });
    }
  } catch (err) {
    next(err);
  }
});

// Getting the info from the SignUp
router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body.email);
    let userSignup = await Users.findOne({ email: req.body.email });
    if (userSignup) {
      throw new Error("User with this email already exists");
    } else {
      await Users.create(req.body);
      res.redirect("/houses");
    }
  } catch (err) {
    next(err);
  }
});

router.get("/logout", (req, res, next) => {
  try {
    req.logout((err) => {
      if (err) {
        throw err;
      }
      req.session.destroy((err) => {
        if (err) {
          throw err;
        }
        res.clearCookie("connect.sid");
        res.redirect("/auth/login");
      });
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
