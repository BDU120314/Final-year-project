const express = require("express");
const db = require("../config/connection_db");
const { CreateFarmers, DeleteFarmers, getAllFarmers, GetSingleFarmer, UpdateFarmer } = require("../controllers/farmers_controller");
const router = express.Router();

router.post("/", CreateFarmers);
router.get("/", getAllFarmers);
router.get("/:id", GetSingleFarmer);
router.put("/update/:id", UpdateFarmer);
router.delete("/delete/:id", DeleteFarmers);

module.exports = router;
