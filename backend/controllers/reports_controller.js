const db = require("../config/connection_db");

// for creating a farmer

const WriteReport = (req, res) => {
  const { sender_id, to_id, content } = req.body;

  const sql = "INSERT INTO reports ( sender_id, to_id, content) VALUES (?,?,?)";
  db.query(sql, [sender_id, to_id, content], (error, result) => {
    if (!error) {
      console.log("you ordered successfully!");
    } else {
      console.log(error.message);
    }
  });
};

//for getting all farmers

const getAllReports = (req, res) => {
  db.query("SELECT * FROM reports", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

//for getting single farmers

const GetSingleReport = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM reports where id = "${id}"`;
  db.query(sql, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

//for updating

const UpdateReport = (req, res) => {
  const id = req.params.id;
  const { sender_id, to_id, content } = req.body;

  const sql = `UPDATE reports SET sender_id =?, to_id = ?, content=? WHERE id = ${id}`;
  db.query(sql, [sender_id, to_id, content], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.status(200).send("Order data updated successfully");
    }
  });
};

//for deleting
const DeleteReport = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM reports WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    return res.json({ Status: "Success" });
  });
};

module.exports = {
  WriteReport,
  getAllReports,
  GetSingleReport,
  UpdateReport,
  DeleteReport,
};
