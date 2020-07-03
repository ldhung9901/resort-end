const User = require("./user.model");
var ObjectId = require("mongodb").ObjectID;
var express = require("express");

const app = express();

module.exports = {
  reIndex: function (req, res) {
   
    res.status(200).json({ message: "login success", user: req.body.user });
  },

  postCreate: async function (req, res) {
    console.log(app.locals.user1);
    const user= await User.find({ user: req.body.user });
    if (user.length >= 1) {
      res.status(501).json({ error: "User exsited" });
    } else {
      User.create({
        user: req.body.user,
        password: req.body.password,
      })
        .then((value) => {
          res.status(200).json({ user: value });
        })
        .catch((e) => res.status(501).json({ error: e }));
    }
  },
  postDeleted: function (req, res) {
    // db.get("users").remove({ id: req.body.id }).write();
    User.deleteOne({ _id: ObjectId(req.body.id) })
      .then((value) => res.status(200).json({ userDeleted: value }))
      .catch((e) => res.status(501).json({ error: e }));
  },
  login: function (req, res) {},
  logout: function (req, res) {
    res.json({ message: "logout" });
  },
  addTocart: function (req, res) {
    res.status(200).json({ message: "ok" });
  },
};
