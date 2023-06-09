const db = require("../config/connection_db");

const AddZone = (req, res) => {
  const { id, name, region_id } = req.body;
  const sql = "INSERT INTO zones (id, name, region_id) VALUES (?,?,?)";
console.log(req.body)
   db.query(sql, [id, name, region_id], (error, result) => {
    console.log(result)
    if (!error) {
     res.json(result);
    } else {
      res.status(500).json({error: "error is occur in"})
    }
  });
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
    SELECT zones.id, zones.name, representative.fname, representative.mname, representative.lname, representative.gender, representative.email, representative.phone_number, representative.user_name
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

const selectZoneById = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM zones WHERE id = ${id}`;

  db.query(sql, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "An error occurred" });
    } else {
      // Check if a zone was found
      if (results.length > 0) {
        const zone = results[0]; // Assuming only one zone is returned
        res.status(200).json(zone);
      } else {
        // No zone found with the given ID
        res.status(404).json({ error: "Zone not found" });
      }
    }
  });
};

//for updating

const UpdateZone = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const sql = `UPDATE zones SET name='${name}' WHERE id=${id}`;
  db.query(sql, [name], (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.status(200).send("Zone data updated successfully");
    }
  });
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
  selectZoneById,
};
