
const express = require("express");
const { CreateWoreda, getAllWoreda, DeleteWoreda, UpdateWoreda, GetSingleWoreda } = require("../controllers/woreda_controlers");
const { upload, UpdateProfile } = require("../config/multer");
 const woreda_router = express.Router();

woreda_router.post("/", CreateWoreda);
woreda_router.get("/", getAllWoreda);
woreda_router.get("/:id", GetSingleWoreda);
woreda_router.put("/profile/:id", upload.single("image"), UpdateProfile);
woreda_router.put("/update/:id", UpdateWoreda);
woreda_router.delete("/delete/:id", DeleteWoreda);

module.exports = woreda_router