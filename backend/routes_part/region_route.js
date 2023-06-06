const express = require('express');
const { GetSingleRegionAdmin } = require('../controllers/regionController');
const { upload, UpdateProfile } = require('../config/multer');
const regionAdminRouter = express.Router();
regionAdminRouter.get("/:id", GetSingleRegionAdmin);
regionAdminRouter.put("/profile/:id", upload.single("image"), UpdateProfile);


module.exports = regionAdminRouter