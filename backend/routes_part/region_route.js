const express = require('express');
const { GetSingleRegionAdmin } = require('../controllers/regionController');
const regionAdminRouter = express.Router();
regionAdminRouter.get("/:id", GetSingleRegionAdmin);

module.exports = regionAdminRouter