var express = require("express");
var userRouter = express.Router();
var controller = require("./Controller");
var loginValidate = require("./Authentication");

userRouter.post("/create", controller.postCreate);
userRouter.post("/delete", loginValidate.loginCheck, controller.postDeleted);
userRouter.post("/login", loginValidate.validateLogin, controller.reIndex);
userRouter.post("/logout", loginValidate.loginCheck, controller.logout);
userRouter.post("/cart", loginValidate.loginCheck);
module.exports = userRouter;
