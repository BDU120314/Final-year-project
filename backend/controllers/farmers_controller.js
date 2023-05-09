const db = require("../config/connection_db");


 
// for creating a farmer

const CreateFarmers = (req, res) => {
  const {
    fname,
    mname,
    lname,
    birth_date,
    email,
    address,
    phone_number,
    land_amount,
    user_name,
    password,
    id,
  } = req.body;

  const sql =
    "INSERT INTO farmers (fname, mname, lname, birth_date, email, address, phone_number, land_amount, user_name,password, id) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      fname,
      mname,
      lname,
      birth_date,
      email,
      address,
      phone_number,
      land_amount,
      user_name,
      password,
      id,
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
    email,
    address,
    phone_number,
    land_amount,
    user_name,
    password,
  } = req.body;

  const sql = `UPDATE farmers SET fname ='${fname}', mname = '${mname}', lname = '${lname}', birth_date = '${birth_date}', email = '${email}', address = '${address}',  phone_number = '${phone_number}', land_amount = '${land_amount}', user_name = '${user_name}', password = '${password}' WHERE id = ${id}`;
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