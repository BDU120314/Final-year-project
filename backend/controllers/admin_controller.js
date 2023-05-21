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
const role_id=5;
  const sql =
    `INSERT INTO representatives (id, fname, mname, lname,gender, email,phone_number, user_name, password,zone_id,woreda_id,kebele_id, role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,${role_id} )`;

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
  db.query("SELECT * FROM `land-admin`", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

const GetSingleAdmin = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM \`land-admin\` where id = "${id}"`;
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
    kebele_name,
    rep_fname,
    rep_mname,
    rep_lname,
    user_name,
    email,
    password,
    rep_phone_number,
  } = req.body;

  const sql = `UPDATE \`land-admin\` SET kebele_name=?, rep_fname=?, rep_mname=?, rep_lname=?, user_name=?, email=?, password=?, rep_phone_number=? WHERE id=${id}`;
  db.query(
    sql,
    [
      kebele_name,
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

const DeleteAdmin = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM \`land-admin\` WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    res.json({ Status: "Success" });
  });
};

module.exports = {
  CreateAdmin,
  getAllAdmin,
  GetSingleAdmin,
  UpdateAdmin,
  DeleteAdmin,
};
