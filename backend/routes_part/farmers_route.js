const express = require("express");
const { CreateFarmers, DeleteFarmers, getAllFarmers, GetSingleFarmer, UpdateFarmer, GetallFarmerbyKebeleId, UpdateProfile, upload } = require("../controllers/farmers_controller");
const router = express.Router();

router.post("/", CreateFarmers);
router.get("/", getAllFarmers);
router.get("/:id", GetSingleFarmer);
router.get("/kebele/:id", GetallFarmerbyKebeleId);
router.put("/update/:id", UpdateFarmer);
router.put("/profile/:id",upload.single('image'), UpdateProfile);
router.delete("/delete/:id", DeleteFarmers);

module.exports = router;
