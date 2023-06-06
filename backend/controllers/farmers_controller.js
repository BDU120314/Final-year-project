// for creating a farmer

const db = require("../config/connection_db.js");
const bcrypt = require("bcrypt");

// for creating a farmer

const CreateFarmers = async (req, res) => {
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

  const sql = `INSERT INTO farmers (id, fname, mname, lname, birth_date, gender, land_by_ha, email, phone_number, user_name, password, kebele_id, role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;

  // Check if the kebele_id exists in the kebeles table
  const kebeleSql = `SELECT id FROM kebeles WHERE id = ?`;
  db.query(kebeleSql, [kebele_id], (err, kebeleResult) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error creating farmer" });
    }

    if (kebeleResult.length === 0) {
      return res.status(400).json({ message: "Invalid kebele_id" });
    }

    // Kebele_id exists, proceed with the farmer creation
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
          return res.status(500).json({ message: "Error registering farmer" });
        }
      }
    );
  });
};

//for getting all farmers

const getAllFarmers = (req, res) => {
  db.query("SELECT * FROM farmers", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

//for getting single farmers

const GetallFarmerbyKebeleId = (req, res) => {
  const id = req.params.id;
  console.log(id)
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
      res.send(rows);
    } else console.log(err);
  });
};

//for updating

const UpdateFarmer = (req, res) => {
  const id = req.params.id;
  const {
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
  } = req.body;

  const sql = `UPDATE farmers SET fname ='${fname}', mname = '${mname}', lname = '${lname}', birth_date = '${birth_date}', land_by_ha = '${land_by_ha}', gender='${gender}', email = '${email}', phone_number = '${phone_number}', user_name = '${user_name}', password = '${password}' WHERE id = ${id}`;
  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send("Server error: Could not update farmer data");
    } else {
      res.status(200).send("User data updated successfully");
    }
  });
};

//for deleting
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

module.exports = {
  CreateFarmers,
  getAllFarmers,
  GetSingleFarmer,
  UpdateFarmer,
  DeleteFarmers,
  GetallFarmerbyKebeleId,
};
