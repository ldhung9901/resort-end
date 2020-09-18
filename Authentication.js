const express = require("express");
const app = express();
const User = require("./user.model");
const jwt = require("jsonwebtoken");
module.exports = {
  validateLogin: async function (req, res, next) {
    // db.read()
    // var user = db.get("users").find({ name: req.body.name });
    var user = await User.find({ user: req.body.user });
    user = user[0];
    var errors = [];

    if (user === undefined) {
      errors.push("User doesn't exist.");
      return res.status(401).json({
        error: errors,
        value: req.body.user,
      });
    }
    if (user.password !== req.body.password) {
      errors.push("Wrong password.");
      return res.status(401).json({
        error: errors,
        value: req.body.user,
      });
    }
    if (req.body.user === user.user && req.body.password === user.password) {
      var token = jwt.sign(
        { user: req.body.user, password: "no password" },
        process.env.TOKENKEY
      );
      res.status(201).json({ token, user: req.body.user });

      return next();
    }

    if (errors !== []) {
      return res.json({
        error: errors,
        value: req.body.user,
      });
    }
  },

  loginCheck: async function (req, res, next) {
  console.log(req.headers.authorization)
    if (req.headers.authorization) {
      var errors = [];
      var decoded = jwt.verify(req.headers.authorization, process.env.TOKENKEY);

      const userReq = decoded.user;
      const passwordReq = decoded.password;
      var user = await User.find({ user: userReq, password: passwordReq });
      console.log(user)
      if (user !== []) {
        console.log(user);
        res.status(202).json({
          message: "ok",
        });
        next();
      } else {
        res.status(401).json({
          error: "You must to login first.",
        });
      }
    } else {
      res.status(401).json({
        error: "You must to login first.",
      });
    }
  },
};
