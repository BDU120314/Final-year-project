const express = require("express");
const { DeleteDistributor, UpdateDistributor, GetSingleDistributor, getAllDistributor, CreateDistributor } = require("../controllers/distributor_controller");
const distributor_router = express.Router();
distributor_router.post("/", CreateDistributor);
distributor_router.get("/", getAllDistributor);
distributor_router.get("/:id", GetSingleDistributor);
distributor_router.put("/update/:id", UpdateDistributor);
distributor_router.delete("/delete/:id", DeleteDistributor);

module.exports = distributor_router;
