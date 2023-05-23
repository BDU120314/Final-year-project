const express = require("express");
const {LoginUsers} = require("../controllers/login_controller");
const LoginRoute = express.Router();
LoginRoute.post("/", LoginUsers)


module.exports = LoginRoute;
