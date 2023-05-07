const express = require("express");
const { GetSingleZone, CreateZone, getAllZone, UpdateZone, DeleteZone } = require("../controllers/zone_controller");
const zone_router = express.Router();

zone_router.post("/", CreateZone);
zone_router.get("/", getAllZone);
zone_router.get("/:id", GetSingleZone);
zone_router.put("/update/:id", UpdateZone);
zone_router.delete("/delete/:id", DeleteZone);

module.exports = zone_router;
