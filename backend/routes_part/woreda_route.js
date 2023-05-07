
const express = require("express");
const db = require("../config/connection_db");
const { CreateWoreda, getAllWoreda, DeleteWoreda, UpdateWoreda } = require("../controllers/woreda_controlers");
const { GetSingleFarmer } = require("../controllers/farmers_controller");
const woreda_router = express.Router();

woreda_router.post("/", CreateWoreda);
woreda_router.get("/", getAllWoreda);
woreda_router.get("/:id", GetSingleFarmer);
woreda_router.put("/update/:id", UpdateWoreda);
woreda_router.delete("/delete/:id", DeleteWoreda);

module.exports = woreda_router