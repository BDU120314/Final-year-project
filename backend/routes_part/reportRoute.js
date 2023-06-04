const express =require("express")
const { createReport, getAllReports, getReportById, updateReport, deleteReport, authenticateUser } = require("../controllers/reportController")
const reportRouter = express.Router()
reportRouter.post('/', authenticateUser, createReport)
reportRouter.get('/', getAllReports)
reportRouter.get('/:id', getReportById)
reportRouter.get('/update/:id',authenticateUser, updateReport)
reportRouter.get('/delete:id', deleteReport)


module.exports =reportRouter