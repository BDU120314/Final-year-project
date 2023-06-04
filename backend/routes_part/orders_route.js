const express = require("express");
const { AddOrder, getAllOrders, GetSingleOrder, UpdateOrder, DeleteOrder, getAllOrdersByFarmerId } = require("../controllers/order_controller");
const order_route = express.Router();

order_route.post("/", AddOrder);
order_route.get("/",  getAllOrders);
order_route.get("/farmer/:id", getAllOrdersByFarmerId);
order_route.get("/:id", GetSingleOrder);
order_route.put("/update/:id", UpdateOrder);
order_route.delete("/delete/:id", DeleteOrder);

module.exports = order_route;
