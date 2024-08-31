// const mongoose = require('mongoose');
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const findOrCreate = require("mongoose-findorcreate");
// const express = require("express");
// const app = express();

// app.use(session({
//     secret: "Our little secret.",
//     resave: false,
//     saveUninitialized: false
//   }));
// app.use(passport.initialize());
// app.use(passport.session());
// const userSchema = new mongoose.Schema({
//     fullname: {
//       type: String,
//     },
//     email: {
//       type: String,
//     },
//     password: {
//       type: String,
//     },
//    });
// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);
// const User = new mongoose.model("users", userSchema);
// passport.use(User.createStrategy());
// passport.serializeUser(function (user, done) {
// done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
// User.findById(id, function (err, user) {
//    done(err, user);
//  });
// });

// module.exports =  User;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
module.exports = User = mongoose.model("users", UserSchema);