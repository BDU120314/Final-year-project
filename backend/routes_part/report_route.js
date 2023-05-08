const express = require("express");
const db = require("../config/connection_db");
const { WriteReport, getAllReports, GetSingleReport, UpdateReport, DeleteReport } = require("../controllers/reports_controller");
 const report_route = express.Router();

report_route.post("/",  WriteReport);
report_route.get("/",   getAllReports);
report_route.get("/:id",  GetSingleReport);
report_route.put("/update/:id", UpdateReport);
report_route.delete("/delete/:id", DeleteReport);

module.exports = report_route;
