
const express = require("express");
const db = require("../config/connection_db");
const { CreateWoreda, getAllWoreda, DeleteWoreda, UpdateWoreda } = require("../controllers/woreda_controlers");
const { GetSingleFarmer } = require("../controllers/farmers_controller");
const routers = express.Router();

routers.post("/", CreateWoreda);
routers.get("/", getAllWoreda);
routers.get("/:id", GetSingleFarmer);
routers.put("/update/:id", UpdateWoreda);
routers.delete("/delete/:id", DeleteWoreda);

module.exports = routers