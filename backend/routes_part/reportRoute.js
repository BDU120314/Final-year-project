const express = require("express");
const {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
  authenticateUser,
  getAllReportsLandAdminId,
  getAllReportsLandKebeleId,
  getAllReportsLandZoneId,
  getAllReportsLandWoredaId,
} = require("../controllers/reportController");

const reportRouter = express.Router();
reportRouter.use(express.json());

reportRouter.post("/", authenticateUser, createReport);
reportRouter.get("/", getAllReports);
reportRouter.get("/landAdmin/:id", getAllReportsLandAdminId);
reportRouter.get("/landAdminByKebele/:id", getAllReportsLandKebeleId);
reportRouter.get("/landAdminByWoreda/:id", getAllReportsLandWoredaId);
reportRouter.get("/landAdminByZone/:id", getAllReportsLandZoneId);
reportRouter.get("/:id", getReportById);
reportRouter.put("/update/:id", authenticateUser, updateReport);
reportRouter.delete("/delete/:id", deleteReport);

module.exports = reportRouter;
