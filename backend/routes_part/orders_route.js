const express = require("express");
const { AddOrder, getAllOrders, GetSingleOrder, UpdateOrder, DeleteOrder, getOrderCount } = require("../controllers/order_controller");
const order_route = express.Router();

order_route.post("/", AddOrder);
order_route.get("/",  getAllOrders);
order_route.get("/:id", GetSingleOrder);
order_route.put("/update/:id", UpdateOrder);
order_route.delete("/delete/:id", DeleteOrder);
order_route.get("/",getOrderCount)

module.exports = order_route;
