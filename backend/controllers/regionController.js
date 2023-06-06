const db = require("../config/connection_db")

const GetSingleRegionAdmin = (req, res) => {
  const id = req.params.id;
  
  const sql = `SELECT * FROM representative where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

module.exports = {GetSingleRegionAdmin}