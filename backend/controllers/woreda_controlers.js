const db = require("../config/connection_db");

// for creating a farmer

const CreateWoreda = (req, res) => {
  const {
    woreda_name,
    rep_fname,
    rep_mname,
    rep_lname,
    user_name,
    email,
    password,
    rep_phone_number,
    id,
  } = req.body;

  const sql =
    "INSERT INTO woreda (woreda_name, rep_fname,rep_mname, rep_lname, user_name, email, password,rep_phone_number,id) VALUES (?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      woreda_name,
      rep_fname,
      rep_mname,
      rep_lname,
      user_name,
      email,
      password,
      rep_phone_number,
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

const getAllWoreda = (req, res) => {
  db.query("SELECT * FROM woreda", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

const GetSingleWoreda = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM woreda where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

//for updating

const UpdateWoreda = (req, res) => {
  const id = req.params.id;
  const {
    woreda_name,
    rep_fname,
    rep_mname,
    rep_lname,
    user_name,
    email,
    password,
    rep_phone_number,
  } = req.body;

  const sql = `UPDATE woreda SET woreda_name =?, rep_fname =?, rep_mname = ?, rep_lname = ?, user_name=?, email = ?, password = ?,  rep_phone_number = ? WHERE id = ${id}`;
  db.query(
    sql,
    [
      woreda_name,
      rep_fname,
      rep_mname,
      rep_lname,
      user_name,
      email,
      password,
      rep_phone_number
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


const DeleteWoreda = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM woreda WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    return res.json({ Status: "Success" });
  });
};
module.exports = {
  CreateWoreda,
  getAllWoreda,
  GetSingleWoreda,
  UpdateWoreda,
  DeleteWoreda,
};
//for getting all farmers
