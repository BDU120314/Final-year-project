const db = require("../config/connection_db");

const AddWoreda = (req, res) => {
  const { id, name, zone_id } = req.body;
  const sql = "INSERT INTO woredas (id, name, zone_id) VALUES (?, ?, ?)";

  db.query(sql, [id, name, zone_id], (error, result) => {
    if (!error) {
      console.log("Data added successfully!");
      res.status(200).send("Data added successfully!");
    } else {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  });
};

const GetWoreda = (req, res) => {
  db.query("SELECT * FROM woredas", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

const GetSingleWoreda = (req, res) => {
  const id = req.params.id;
  const sql = `
  SELECT woredas.id, woredas.name, representative.fname, representative.mname, representative.lname, representative.gender, representative.email, representative.phone_number, representative.user_name
  FROM woredas
  JOIN representative ON woredas.id = representative.woreda_id
  WHERE woredas.id = ?
  `;
  db.query(sql, [id], (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};

const UpdateWoreda = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const sql = `UPDATE woredas SET name='${name}' WHERE id=${id}`;
  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.status(200).send("User data updated successfully");
    }
  });
};

const DeleteWoreda = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM \`woredas\` WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(err.message);
    } else {
      res.json({ Status: "Success" });
    }
  });
};

const selectworedaById = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM woredas WHERE id = ${id}`;

  db.query(sql, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "An error occurred" });
    } else {
      // Check if a zone was found
      if (results.length > 0) {
        const zone = results[0]; // Assuming only one zone is returned
        console.log(zone)
        res.status(200).json(zone);
      } else {
        // No zone found with the given ID
        res.status(404).json({ error: "Zone not found" });
      }
    }
  });
};


module.exports = {
  AddWoreda,
  GetWoreda,
  GetSingleWoreda,
  UpdateWoreda,
  DeleteWoreda,
  selectworedaById,
};
