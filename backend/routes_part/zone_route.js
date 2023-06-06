const express = require("express");
const { GetSingleZone, CreateZone, getAllZone, UpdateZone, DeleteZone } = require("../controllers/zone_controller");
const { upload, UpdateProfile } = require("../config/multer");
const zone_router = express.Router();

zone_router.post("/", CreateZone);
zone_router.get("/", getAllZone);
zone_router.get("/:id", GetSingleZone);
zone_router.put("/profile/:id", upload.single("image"), UpdateProfile);
zone_router.put("/update/:id", UpdateZone);
zone_router.delete("/delete/:id", DeleteZone);

module.exports = zone_router;
