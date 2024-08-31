const morgan = require("morgan");
const path = require("path");
//const GoogleStrategy = require("passport-google-oauth20").Strategy;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.json());
const db = require("./config/key").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
mongoose.set('useCreateIndex', true);
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);
app.use(morgan("tiny"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
