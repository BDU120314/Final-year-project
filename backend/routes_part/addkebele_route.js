const express = require("express");
const { AddKebele, GetKebele, GetSingleKebele, UpdateKebele, DeleteKebele, selectkebeleById } = require("../controllers/addkebele_controllers");
const addkebele_router = express.Router();
 addkebele_router.post("/", AddKebele);
 addkebele_router.get('/', GetKebele)
 addkebele_router.get("/:id", GetSingleKebele)
 addkebele_router.get("/select/:id", selectkebeleById);
 addkebele_router.put("/update/:id", UpdateKebele)
 addkebele_router.delete("/delete/:id", DeleteKebele)
module.exports = addkebele_router;