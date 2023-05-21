const db = require("../config/connection_db");

const CreateDistributor = (req, res) => {
  const {
    id,
    // cluster_name,
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
 const role_id=0;
  const sql =
  `INSERT INTO representatives (id, fname, mname, lname,gender, email,phone_number, user_name, password,zone_id,woreda_id,kebele_id, role_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,${role_id} )`;
  db.query(
    sql,
    [
      id,
    //  cluster_name,
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

const getAllDistributor = (req, res) => {
  db.query("SELECT * FROM distributor", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

const GetSingleDistributor = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM distributor where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

//for updating

const UpdateDistributor = (req, res) => {
  const id = req.params.id;
  const {
    cluster_name,
    fname,
    mname,
    lname,
    user_name,
    email,
    password,
    phone_number,
  } = req.body;

  const sql = `UPDATE distributor SET cluster_name =?, fname =?, mname = ?, lname = ?, user_name=?, email = ?, password = ?,  phone_number = ? WHERE id = ${id}`;
  db.query(
    sql,
    [
      cluster_name, 
      fname,
      mname,
      lname,
      user_name,
      email,
      password,
      phone_number,
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

const DeleteDistributor = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM distributor WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    return res.json({ Status: "Success" });
  });
};
module.exports = {
  CreateDistributor,
  getAllDistributor,
  GetSingleDistributor,
  UpdateDistributor,
  DeleteDistributor,
};
