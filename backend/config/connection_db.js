const mysql = require("mysql");

var db = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "armdos",
  multipleStatements: true,
});
db.getConnection((err, connection) => {
  if (err) {
    console.log(
      "Connection Failed! Error: " + JSON.stringify(err, undefined, 2)
    );
  } else {
    console.log("Connection Established Successfully");
    connection.release();
  }
});

 
module.exports = db;