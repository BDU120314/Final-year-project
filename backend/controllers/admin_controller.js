const multer = require("multer");
const db = require("../config/connection_db");

const CreateAdmin = (req, res) => {
  const {
    id,
    // kebele_name,
    fname,
    mname,
    lname,
    gender,
    email,
    phone_number,
    user_name,
    password,
    zone_id,
    woreda_id,
    kebele_id,
  } = req.body;
  const role_id = 2;
  const sql = `INSERT INTO representative (id, fname, mname, lname,gender, email,phone_number, user_name, password,zone_id,woreda_id,kebele_id, role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,${role_id} )`;

  db.query(
    sql,
    [
      id,
      // kebele_name,
      fname,
      mname,
      lname,
      gender,
      email,
      phone_number,
      user_name,
      password,
      zone_id,
      woreda_id,
      kebele_id,
    ],
    (error, result) => {
      if (!error) {
        console.log("Data added successfully!");
      } else {
        console.log(error.message);
      }
    }
  );
};

const getAllAdmin = (req, res) => {
  db.query(
    "SELECT * FROM representative where role_id=2",
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else console.log(err);
    }
  );
};

const GetSingleAdmin = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM representative where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

//for updating

const UpdateAdmin = (req, res) => {
  const id = req.params.id;
  const {
    fname,
    mname,
    lname,
    gender,
    email,
    phone_number,
    user_name,
    password,
  } = req.body;

  const sql = `UPDATE representative SET fname='${fname}', mname='${mname}', lname='${lname}',gender='${gender}', email='${email}',phone_number='${phone_number}' , user_name='${user_name}', password='${password}' WHERE id=${id}`;
  db.query(
    sql,
    [fname, mname, lname, gender, email, phone_number, user_name, password],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(200).send("User data updated successfully");
      }
    }
  );
};

const DeleteAdmin = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM \`representative\` WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    res.json({ Status: "Success" });
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

module.exports = {
  CreateAdmin,
  getAllAdmin,
  GetSingleAdmin,
  UpdateAdmin,
  DeleteAdmin,
  UpdateProfile,
  upload,
};
