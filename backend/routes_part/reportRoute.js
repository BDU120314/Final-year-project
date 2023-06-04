const express = require("express");
const {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
  authenticateUser,
  getAllReportsLandAdminId,
} = require("../controllers/reportController");

const reportRouter = express.Router();
reportRouter.use(express.json());

reportRouter.post("/", authenticateUser, createReport);
reportRouter.get("/", getAllReports);
reportRouter.get("/landAdmin/:id", getAllReportsLandAdminId);
reportRouter.get("/:id", getReportById);
reportRouter.put("/update/:id", authenticateUser, updateReport);
reportRouter.delete("/delete/:id", deleteReport);

module.exports = reportRouter;
