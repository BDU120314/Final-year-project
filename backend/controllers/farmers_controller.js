const db = require("../config/connection_db");


 
// for creating a farmer

const CreateFarmers = (req, res) => {
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
const role_id=1;
  const sql =
    `INSERT INTO farmers (id, fname, mname, lname, birth_date, gender, land_by_ha, email, phone_number, user_name,password, kebele_id,role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,${role_id})`;
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

//for getting all farmers

const getAllFarmers = (req, res) => {
  db.query("SELECT * FROM farmers", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};


//for getting single farmers
  
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
};