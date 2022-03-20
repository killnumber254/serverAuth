const express = require("express");
const userRoute = require("../router/userRouter");
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());

app.use(cookieParser());

app.use(userRoute);

app.use(function (req, res, next) {
  //   const allowedOrigins = [
  //     "https://killnumber254.github.io",
  //     "http://127.0.0.1:3000",
  //     "http://localhost:3000",
  //   ];
  //   const origin = req.headers.origin;
  //   if (allowedOrigins.includes(origin)) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // }
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    "application/json;charset=UTF-8"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT");
});

passport.serializeUser((user, done) => {
  done(null, user._id);
  // console.log(user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    // err ? done(err) : done(null, user);
    done(err, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

module.exports = app;
