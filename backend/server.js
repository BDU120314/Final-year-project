const express = require("express");
const bodyparser = require("body-parser");
const mysqlConnection = require("./config/connection_db");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyparser.json());
//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/farmers' , (req, res) => {
mysqlConnection.query('SELECT * FROM farmers', (err, rows, fields) => {
if (!err){
  res.send(rows);
 
}

else
console.log(err);
})
} );
app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
