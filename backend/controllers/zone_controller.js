const db = require("../config/connection_db");

const CreateZone = (req, res) => {
  const {
    id,
   // zone_name,
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
 const role_id=3;
  const sql =
  `INSERT INTO representatives (id,fname, mname,lname,gender, email,phone_number, user_name, password,zone_id,woreda_id,kebele_id, role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,${role_id} )`;
  db.query(
    sql,
    [
      id,
      // zone_name,
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

const getAllZone = (req, res) => {
  db.query("SELECT * FROM zone", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

const GetSingleZone = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM zone where id = "${id}"`;
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
    zone_name,
    rep_fname,
    rep_mname,
    rep_lname,
    user_name,
    email,
   password,
    rep_phone_number,
  } = req.body;

  const sql = `UPDATE zone SET zone_name =?, rep_fname =?, rep_mname = ?, rep_lname = ?, user_name=?, email = ?,password = ?,  rep_phone_number = ? WHERE id = ${id}`;
  db.query(
    sql,
    [
      zone_name,
      rep_fname,
      rep_mname,
      rep_lname,
      user_name,
      email,
     password,
      rep_phone_number,
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
  const sql = `DELETE FROM zone WHERE id = ${id}`;
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
