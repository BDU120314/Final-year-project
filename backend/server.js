const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require("./routes_part/farmers_route");
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
//middleware

//route
app.use("/api/v1/farmers", router);


app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
