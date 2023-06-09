const express = require("express");
const { AddZone, GetZone, GetSingleZone, UpdateZone, DeleteZone, selectZoneById } = require("../controllers/addzone_controller");
const addzone_route=express.Router();

 addzone_route.post("/",AddZone);
 addzone_route.get("/",GetZone);
 addzone_route.get("/:id",GetSingleZone);
 addzone_route.get("/select/:id", selectZoneById);
 addzone_route.put("/update/:id", UpdateZone);
 addzone_route.delete("/delete/:id" ,DeleteZone);
module.exports=addzone_route;