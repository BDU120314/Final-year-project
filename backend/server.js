const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const db = require("./config/connection_db");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(bodyparser.json());

//register farmers
app.post("/register", (req, res) => {
  const {fname, mname, lname, birth_date, email, address, phone_number, land_amount, user_name,password, id} = req.body
  
  var sql =
    "INSERT INTO farmers (fname, mname, lname, birth_date, email, address, phone_number, land_amount, user_name,password, id) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  db.query(sql,  [fname, mname, lname, birth_date, email, address, phone_number, land_amount, user_name,password, id], (error, result) => {
    if (!error) {
      console.log("Data added successfully!");
      console.log(result);
    } else {
      console.log(error);
    }
  });
});

//Creating GET Router to fetch all the learner details from the MySQL Database
app.get("/farmers", (req, res) => {
  db.query("SELECT * FROM farmers", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
});
//get single farmer
app.get("/farmers/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM farmers where id = "${id}"`;
  db.query(sql, (err, data, field) => {
    if (!err) {
      res.send(data);
      console.log(`user exist in id ${id}`);
    } else console.log(err);
  });
});

//update farmers info
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const fname = req.body.fname;
  const mname = req.body.mname;
  const lname = req.body.lname;
  const birth_date = req.body.birth_date;
  const email = req.body.email;
  const password = req.body.password;
  const user_name = req.body.user_name;
  const address = req.body.fname;
  const land_amount = req.body.land_amount;
  const phone_number = req.body.phone_number;
  const sql = `UPDATE  farmers SET (fname, mname, lname, birth_date, email, address, phone_number, land_amount, user_name,password, id) = ["${fname}", "${mname}", "${lname}", "${birth_date}", "${email}", "${address}", "${phone_number}", "${land_amount}","${user_name}", "${password}", "${id}"]`;
  db.query(sql);
});

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
