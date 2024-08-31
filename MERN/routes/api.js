// const express = require('express');
// const app = express.Router();
// const User = require('../models/model');
// const passport =require("passport");
//  app.get("/", function (req, res) {
//     res.type("text/html");
//     res.send("<p>hello you have successfully came to /about route!</p>");
//     //res.render("home");
//   });
//  app.get("/about", function (req, res) {
//    //res.render("about");
//    res.type("text/html");
//    res.send("<p>hello you have successfully came to /about route!</p>");
//   });
 
//   app.get("/verify", function (req, res) {
//  //res.render("verify");
//    res.type("text/html");
//    res.send("<p>hello you have successfully came to /verify route!</p>");
//   });
 
//   app.get("/forgotpassword", function (req, res) {
//  //res.render("forgotpassword");
//  res.type("text/html");
//  res.send("<p>hello you have successfully came to /forgotpassword route!</p>");
//  });
 
//   app.get("/location", function (req, res) {
//  //res.render("location");
//  res.type("text/html");
//  res.send("<p>hello you have successfully came to /location route!</p>");
//   });
 
//   app.get("/login", function (req, res) {
//     //res.render("login");
//   });
 
//   app.get("/register", function (req, res) {
//     //res.render("register");
//   });
 
//   app.post("/register", function (req, res) {
//    User.register({ username:req.body.fullname,email: req.body.email} ,req.body.password, function (err) {
//      if (err) {
//        console.log(err);
//        //res.redirect("/register");
//      } else {
//        passport.authenticate("local")(req, res, function () {
//          //res.redirect("/location");
//          console.log('done');
//        });
//      }
//    });
//  });
 
//  app.post("/login", function (req, res) {
//    const user = new User({
//      email: req.body.email,
//      password: req.body.password,
//    });
 
//    req.login(user, function (err) {
//      if (err) {
//        console.log(err);
//      } else {
//        passport.authenticate("local")(req, res, function () {
//          console.log(true);
//          //res.redirect("/location");
//        });
//      }
//    });
//  });

//  module.exports = app;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/key");
// Load input validation
const validateRegisterInput = require("../validator/register");
const validateLoginInput = require("../validator/login");
// Load User model
const User = require("../models/model");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
  const password = req.body.password;
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
