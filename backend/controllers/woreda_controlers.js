const bcrypt = require("bcrypt");
const db = require("../config/connection_db");

const CreateWoreda = async (req, res) => {
  const {
    fname,
    mname,
    lname,
    gender,
    email,
    phone_number,
    user_name,
    password,
    woreda_id,
  } = req.body;
  const role_id = 3;

  try {
    // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO representative (fname, mname, lname, gender, email, phone_number, user_name, password, woreda_id, role_id) VALUES (?,?,?,?,?,?,?,?,?,?)`;

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
        woreda_id,
        role_id,
      ],
      (error, result) => {
        if (!error) {
          console.log("Data added successfully!");
        } else {
          console.log(error.message);
        }
      }
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { CreateWoreda };


const getAllWoreda = (req, res) => {
  db.query(
    "SELECT * FROM representative Where role_id=3",
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else console.log(err);
    }
  );
};

const GetSingleWoreda = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM representative where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.json({rows});
    } else console.log(err);
  });
};

const GetSingleAdminByZone_id = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT r.*
               FROM representative AS r
               JOIN woredas AS w ON r.woreda_id =w.id
               WHERE w.zone_id = "${id}"`;

  db.query(sql, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send("An error occurred while fetching the data.");
    }
  });
};


//for updating

const UpdateWoreda = (req, res) => {
  const id = req.params.id;
  const {
    fname,
    mname,
    lname,
    gender,
    email,
    phone_number,
    user_name,
    password,
    woreda_id
  } = req.body;

  const sql = `UPDATE representative SET fname='${fname}', mname='${mname}', lname='${lname}',gender='${gender}', email='${email}',phone_number='${phone_number}' , user_name='${user_name}', password='${password}', woreda_id ='${woreda_id}' WHERE id=${id}`;
  db.query(
    sql,
    [fname, mname, lname, gender, email, phone_number, user_name, password, woreda_id],
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
  const sql = `DELETE FROM representative WHERE id = ${id}`;
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
  GetSingleAdminByZone_id,
};
//for getting all farmers
