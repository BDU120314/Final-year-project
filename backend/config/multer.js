const multer = require("multer");
const db =require('./connection_db')

const imgConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "backend/uploads");
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Only JPEG, and PNG files are allowed"));
  }
};
const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

const UpdateProfile = (req, res) => {
  const id = req.params.id;
  const image = req.file ? req.file.filename : null; // Get the uploaded image filename, or null if no file is uploaded

  const sql = `UPDATE representative SET profile = ? WHERE id = ?`;
  const values = [image, id];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error(error);
      res
        .status(500)
        .send("Server error: Could not update land admin's profile image");
    } else {
      res.status(200).send("land admin's profile image updated successfully");
    }
  });
};

module.exports ={
  upload,
  UpdateProfile
}