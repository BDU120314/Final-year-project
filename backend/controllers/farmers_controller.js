const multer = require("multer");
const db = require("../config/connection_db.js");
const bcrypt = require("bcrypt");

// for creating a farmer
const CreateFarmers = async (req, res) => {
  try {
    const {
      id,
      fname,
      mname,
      lname,
      birth_date,
      gender,
      land_by_ha,
      email,
      phone_number,
      user_name,
      password,
      kebele_id,
    } = req.body;

    const role_id = 5;

    const kebeleSql = `SELECT id FROM kebeles WHERE id = ?`;
    db.query(kebeleSql, [kebele_id], (err, kebeleResult) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error creating farmer" });
      }

      if (kebeleResult.length === 0) {
        return res.status(400).json({ message: "Invalid kebele_id" });
      }

      const sql = `INSERT INTO farmers (id, fname, mname, lname, birth_date, gender, land_by_ha, email, phone_number, user_name, password, kebele_id, role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;

      db.query(
        sql,
        [
          id,
          fname,
          mname,
          lname,
          birth_date,
          gender,
          land_by_ha,
          email,
          phone_number,
          user_name,
          password,
          kebele_id,
          role_id,
        ],
        (error, result) => {
          if (!error) {
            console.log("Farmer registered successfully!");
            return res
              .status(200)
              .json({ message: "Farmer registered successfully!" });
          } else {
            console.error(error);
            return res
              .status(500)
              .json({ message: "Error registering farmer" });
          }
        }
      );
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating farmer" });
  }
};
// for getting all farmers

const getAllFarmers = (req, res) => {
  db.query("SELECT * FROM farmers", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

// for getting single farmers

const GetallFarmerbyKebeleId = (req, res) => {
  const id = req.params.id;
  console.log(id);
  const sql = `SELECT * FROM farmers where kebele_id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

const GetSingleFarmer = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM farmers where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      console.log(rows)
      res.send(rows);
    } else console.log(err);
  });
};

// for updating
const UpdateFarmer = (req, res) => {
  const id = req.params.id;
  const {
    fname,
    mname,
    lname,
    gender,
    land_by_ha,
    email,
    phone_number,
    user_name,
    password,
  } = req.body;

  const sql =
    "UPDATE farmers SET fname = ?, mname = ?, lname = ?, land_by_ha = ?, gender = ?, email = ?, phone_number = ?, user_name = ?, password = ? WHERE id = ?";
  const values = [
    fname,
    mname,
    lname,
    land_by_ha,
    gender,
    email,
    phone_number,
    user_name,
    password,
    id,
  ];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send("Server error: Could not update farmer data");
    } else {
      res.status(200).send("User data updated successfully");
    }
  });
};


// for deleting
const DeleteFarmers = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM farmers WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    return res.json({ Status: "Success" });
  });
};

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
    callback(new Error("Only PDF, JPEG, and PNG files are allowed"));
  }
};
const upload = multer({
  storage: imgConfig,
  fileFilter: isImage,
});

const UpdateProfile = (req, res) => {
  const id = req.params.id;
  const image = req.file ? req.file.filename : null; // Get the uploaded image filename, or null if no file is uploaded

  const sql = `UPDATE farmers SET profile = ? WHERE id = ?`;
  const values = [image, id];

  db.query(sql, values, (error, result) => {
    if (error) {
      console.error(error);
      res
        .status(500)
        .send("Server error: Could not update farmer's profile image");
    } else {
      res.status(200).send("Farmer's profile image updated successfully");
    }
  });
};

module.exports = {
  CreateFarmers,
  getAllFarmers,
  GetallFarmerbyKebeleId,
  GetSingleFarmer,
  UpdateFarmer,
  DeleteFarmers,
  upload,
  UpdateProfile,
};
