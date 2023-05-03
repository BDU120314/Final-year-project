const express = require("express");
const db = require("../config/connection_db");
const router = express.Router();

//create farmer
router.post("/", (req, res) => {
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

  var sql =
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
});

//Creating GET Router to fetch all the learner details from the MySQL Database
router.get("/", (req, res) => {
  db.query("SELECT * FROM farmers", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
});
//get single farmer
router.get("/:id", (req, res) => {
  const { id } = req.params.id;
  const sql = `SELECT * FROM farmers where id = "${id}"`;
  db.query(sql, (err, data, field) => {
    if (!err) {
      res.send(data);
      console.log(`user exist in id ${id}`);
    } else console.log(err);
  });
});

//update farmers info
router.put("/update/:id", (req, res) => {
  const { id } = req.params.id;
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
  // Update query to update multiple fields
  const sql = `UPDATE farmers SET fname = ?, mname = ?, lname = ? birth_date = ?, email = ?, address = ?  phone_number =?,
    land_amount = ?, 
    user_name = ?,
    password = ?, WHERE id = ?`;
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
    ],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send("Server error: Could not update farmer data");
      } else {
        res.status(200).send("User data updated successfully");
      }
    }
  );
});

// //delete farmer from data base
// router.use("/delete/:id",
// (req, res) =>{
//   const {id} = req.params
//   db.query(DROP farmers where id= id)

//   })

module.exports = router;
