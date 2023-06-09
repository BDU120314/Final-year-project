const express = require("express");
const { AddWoreda, UpdateWoreda, GetWoreda, GetSingleWoreda, DeleteWoreda, selectworedaById } = require("../controllers/addworeda_controller");
const addworeda_route=express.Router();

addworeda_route.post("/",AddWoreda)
addworeda_route.get("/",GetWoreda)
addworeda_route.get("/:id",GetSingleWoreda)
addworeda_route.get("/select/:id", selectworedaById);
addworeda_route.put("/update/:id",UpdateWoreda)
addworeda_route.delete("/delete/:id",DeleteWoreda)
module.exports=addworeda_route;