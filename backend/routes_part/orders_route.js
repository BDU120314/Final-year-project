const express = require("express");
const {
  AddOrder,
  getAllOrders,
  GetSingleOrder,
  UpdateOrder,
  DeleteOrder,
  getAllOrdersByFarmerId,
  getAllOrdersByRegionAdminId,
  countPendingOrdersForWoredaAdmin,
  countZoneApprovedOrdersForRegionAdmin,
  getAllOrdersByWoredaId,
  getAllOrdersByZoneId,
  countPendingOrdersForZoneAdmin,
  UpdateFarmersOrder,
} = require("../controllers/order_controller");
const order_route = express.Router();

order_route.post("/", AddOrder);
order_route.get("/", getAllOrders);
order_route.get("/farmer/:id", getAllOrdersByFarmerId);
order_route.put("/farmer/update/:id", UpdateFarmersOrder);
order_route.get("/woreda/:id", getAllOrdersByWoredaId);
order_route.get("/zone/:id", getAllOrdersByZoneId);
order_route.get("/region/:id", getAllOrdersByRegionAdminId);
order_route.get("/countWoreda/:id", countPendingOrdersForWoredaAdmin);
 order_route.get("/countZone/:id", countPendingOrdersForZoneAdmin);
 order_route.get("/countRegion/:id", countZoneApprovedOrdersForRegionAdmin);
order_route.get("/:id", GetSingleOrder);
order_route.put("/update/:id", UpdateOrder);
order_route.delete("/delete/:id", DeleteOrder);

module.exports = order_route;
