const db = require("../config/connection_db");

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

  const role_id = 1;

  // Check if the data already exists
  const checkSql = `SELECT * FROM farmers WHERE phone_number = ?`;
  db.query(checkSql, [phone_number], (error, rows) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Server error: Could not create farmer");
    }

    if (rows.length > 0) {
      return res.status(409).send("Data already exists for the given phone number");
    }

    const insertSql = `INSERT INTO farmers (id, fname, mname, lname, birth_date, gender, land_by_ha, email, phone_number, user_name, password, kebele_id, role_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(
      insertSql,
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
        if (error) {
          console.error(error);
          return res.status(500).send("Server error: Could not create farmer");
        }
        console.log("Data added successfully!");
        res.status(200).send("Data added successfully!");
      }
    );
  });
};

// for getting all farmers
const getAllFarmers = (req, res) => {
  db.query("SELECT * FROM farmers", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send("Server error: Could not get farmers");
    }
  });
};

// for getting single farmer
const GetSingleFarmer = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM farmers WHERE id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send("Server error: Could not get farmer");
    }
  });
};

// for updating
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

  const sql = `UPDATE farmers SET fname = '${fname}', mname = '${mname}', lname = '${lname}', birth_date = '${birth_date}', land_by_ha = '${land_by_ha}', gender = '${gender}', email = '${email}', phone_number = '${phone_number}', user_name = '${user_name}', password = '${password}' WHERE id = ${id}`;
  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send("Server error: Could not update farmer data");
    } else {
      res.status(200).send("User data updated successfully");
    }
  });
};

// for deleting
const DeleteFarmers = async (req, res) => {
  const id = req.params.id;
  try {
    const sql = `DELETE FROM farmers WHERE id = ${id}`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server error: Could not delete farmer");
      }
      return res.json({ Status: "Success" });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error,
    });
  }
};

module.exports = {
  CreateFarmers,
  getAllFarmers,
  GetSingleFarmer,
  UpdateFarmer,
  DeleteFarmers,
};
