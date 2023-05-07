const express = require("express");
const { DeleteAdmin, UpdateAdmin, GetSingleAdmin, getAllAdmin, CreateAdmin } = require("../controllers/admin_controller");

const land_admin_router = express.Router();

land_admin_router.post("/", CreateAdmin);
land_admin_router.get("/", getAllAdmin);
land_admin_router.get("/:id", GetSingleAdmin);
land_admin_router.put("/update/:id", UpdateAdmin);
land_admin_router.delete("/delete/:id", DeleteAdmin);

module.exports = land_admin_router;
