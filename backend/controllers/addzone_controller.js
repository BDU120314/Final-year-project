const db = require("../config/connection_db");

const AddZone = (req, res) => {
  const {
     id,
    zone_name, 
  } = req.body; 
  const sql =
    "INSERT INTO zones (id,zone_name ) VALUES (?,?)";

  db.query(
    sql,
    [
      id,
     zone_name,  
    ],
    (error, result) => {
      if (!error) {
        console.log("Zone added successfully!");
      } else {
        console.log(error.message);
      }
    }
  );
};

const GetZone = (req, res) => {
  db.query("SELECT * FROM zones", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

const GetSingleZone = (req, res) => {
  const id = req.params.id;
  const sql = `
    SELECT zones.id, zones.zone_name, representative.fname, representative.mname, representative.lname, representative.gender, representative.email, representative.phone_number, representative.user_name
    FROM zones
    JOIN representative ON zones.id = representative.zone_id
    WHERE zones.id = ?
  `;
  db.query(sql, id, (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
};

//for updating

const UpdateZone = (req, res) => {
  const id = req.params.id;
  const {
    zone_name,
  } = req.body;

  const sql = `UPDATE zones SET zone_name='${zone_name}' WHERE id=${id}`;
  db.query(
    sql,
    [ 
      zone_name,
    ],
    (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).send(error);
      } else {
        res.status(200).send("Zone data updated successfully");
      }
    }
  );
};

const DeleteZone = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM \`zones\` WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    res.json({ Status: "Success" });
  });
};

module.exports = {
  AddZone,
  GetZone,
  GetSingleZone,
  UpdateZone,
  DeleteZone,
};
