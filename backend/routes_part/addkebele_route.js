const express = require("express");
const { AddKebele, GetKebele, GetSingleKebele, UpdateKebele, DeleteKebele } = require("../controllers/addkebele_controllers");
const addkebele_router = express.Router();
 addkebele_router.post("/", AddKebele);
 addkebele_router.get('/', GetKebele)
 addkebele_router.get("/:id", GetSingleKebele)
 addkebele_router.put("/update/:id", UpdateKebele)
 addkebele_router.delete("/delete/:id", DeleteKebele)
// distributor_router.post("/", CreateDistributor);
// distributor_router.get("/", getAllDistributor);
// distributor_router.get("/:id", GetSingleDistributor);
// distributor_router.put("/update/:id", UpdateDistributor);
// distributor_router.delete("/delete/:id", DeleteDistributor);

module.exports = addkebele_router;