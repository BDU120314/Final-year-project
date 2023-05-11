const express = require("express");
const db = require("../config/connection_db");
const LoginUsers = require("../controllers/login_controller");
const Login_Route = express.Router();

Login_Route.post("/", LoginUsers);

module.exports = Login_Route;
