const db = require("../config/connection_db");

const CreateZone = (req, res) => {
  const {
    fname,
    mname,
    lname,
    gender,
    email,
    phone_number,
    user_name,
    password,
    zone_id,
  } = req.body;

  console.log(req.body);
  const role_id = 4;
  const sql = `INSERT INTO representative (fname, mname,lname,gender, email,phone_number, user_name, password, zone_id, role_id) VALUES (?,?,?,?,?,?,?,?,?,${role_id} )`;
  db.query(
    sql,
    [
      fname,
      mname,
      lname,
      gender,
      email,
      phone_number,
      user_name,
      password,
      zone_id,
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

const getAllZone = (req, res) => {
  db.query(
    "SELECT * FROM representative Where role_id=4",
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else console.log(err);
    }
  );
};

const GetSingleZone = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM representative where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

//for updating

const UpdateZone = (req, res) => {
  const id = req.params.id;
  const {
    zone_id,
    fname,
    mname,
    lname,
    gender,
    email,
    phone_number,
    user_name,
    password,
  } = req.body;

  const sql = `UPDATE representative SET fname='${fname}', mname='${mname}', lname='${lname}',gender='${gender}', email='${email}', phone_number='${phone_number}', user_name='${user_name}', password='${password}', zone_id ='${zone_id}' WHERE id=${id}`;
  db.query(
    sql,
    [
      fname,
      mname,
      lname,
      gender,
      email,
      phone_number,
      user_name,
      password,
      zone_id,
    ],
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

const DeleteZone = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM representative WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    return res.json({ Status: "Success" });
  });
};
module.exports = {
  CreateZone,
  getAllZone,
  GetSingleZone,
  UpdateZone,
  DeleteZone,
};
