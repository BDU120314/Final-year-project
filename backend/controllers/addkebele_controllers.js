const db = require("../config/connection_db");

const AddKebele = (req, res) => {
  const {
     id,
    kebele_name, 
    woreda_id
  } = req.body; 
  console.log(req.body)
  const sql =
    "INSERT INTO kebeles (id,kebele_name, woreda_id ) VALUES (?,?,?)";

  db.query(
    sql,
    [
      id,
     kebele_name,
     woreda_id  
    ],
    (error, result) => {
      if (!error) {
        console.log("Data added successfully!");
      } else {
        console.log(error.message);
      }
    }
  );
};

const GetKebele = (req, res) => {
  db.query("SELECT * FROM kebeles", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
};

const GetSingleKebele = (req, res) => {
  const id = req.params.id;
  const sql = `
    SELECT kebeles.id, kebeles.kebele_name, representative.fname, representative.mname, representative.lname, representative.gender, representative.email, representative.phone_number, representative.user_name
    FROM kebeles
    JOIN representative ON kebeles.id = representative.kebele_id
    WHERE kebeles.id = ?
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

const UpdateKebele = (req, res) => {
  const id = req.params.id;
  const {
    kebele_name,
  } = req.body;

  const sql = `UPDATE kebeles SET kebele_name='${kebele_name}' WHERE id=${id}`;
  db.query(
    sql,
    [ 
      kebele_name,
    ],
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

const DeleteKebele = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM \`kebeles\` WHERE id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err.message);
    }
    res.json({ Status: "Success" });
  });
};

const selectkebeleById = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM kebeles WHERE id = ${id}`;

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


module.exports = {
  AddKebele,
  GetKebele,
  GetSingleKebele,
  UpdateKebele,
  DeleteKebele,
  selectkebeleById,
};
