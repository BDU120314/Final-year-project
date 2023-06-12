const db = require("../config/connection_db");
const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  // Retrieve the JWT token from the request headers or cookies
  const token = req.headers.authorization || req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const formattedToken = token.replace("Bearer ", "");

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(formattedToken, "chachu");
    // Assign the user ID to req.user.id
    req.user = { id: decoded.rep_id };

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

const createReport = (req, res) => {
  try {
    const { title, content, kebele_id, woreda_id, zone_id } = req.body;
    const userId = req.user.id;
    const date = new Date();
    const query = `
      INSERT INTO reports (title, content, rep_id, kebele_id, woreda_id, zone_id, createAt, updateAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      title,
      content,
      userId,
      kebele_id || null,
      woreda_id || null,
      zone_id || null,
      date,
      date,
    ];
    console.log("Query:", query);
    console.log("Values:", values);

    const result = db.query(query, values);
    console.log(result);
    const reportId = result.insertId;

    const reportData = {
      title,
      content,
      rep_id: userId,
      kebele_id: kebele_id || null,
      woreda_id: woreda_id || null,
      zone_id: zone_id || null,
      reportId,
    };

    res
      .status(201)
      .json({ message: "Report created successfully", report: reportData });
  } catch (error) {
    console.error("Error creating report", error);
    res.status(500).json({ error: "Failed to create report" });
  }
};



const updateReport =  (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const query = `
      UPDATE reports
      SET title = ?, content = ?, updateAt = NOW()
      WHERE id = ?
    `;
    const values = [title, content, id];

     db.query(query, values);

    res.json({ message: "Report updated successfully" });
  } catch (error) {
    console.error("Error updating report", error);
    res.status(500).json({ error: "Failed to update report" });
  }
};

const getAllReports =  (req, res) => {
  const query = "SELECT * FROM reports ";
  db.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving reports:", error);
      res.status(500).json({ error: "Error retrieving reports" });
    } else {
      res.status(200).json(results);
    }
  });
};

const getReportById =  (req, res) => {
  const { id } = req.params;

  try {
    const query = "SELECT * FROM reports WHERE id = ?";
    const values = [id];

    const [report] =  db.query(query, values);

    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }

    res.json(report);
  } catch (error) {
    console.error("Error retrieving report", error);
    res.status(500).json({ error: "Failed to retrieve report" });
  }
};

// for getting all orders of a specific farmer
const getAllReportsLandAdminId = (req, res) => {
  const landAdminId = req.params.id;
  const sql = "SELECT * FROM reports WHERE rep_id=?";
  db.query(sql, [landAdminId], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};
const getAllReportsWoreda = (req, res) => {
  const landAdminId = req.params.id;
  const sql = "SELECT * FROM reports WHERE rep_id=?";
  db.query(sql, [landAdminId], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};
const getAllReportsLandKebeleId = (req, res) => {
  const kebele_id = req.params.id;
  const sql = "SELECT * FROM reports WHERE kebele_id = ?";
  db.query(sql, [kebele_id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};
const getAllReportsLandWoredaId = (req, res) => {
  const woreda_id = req.params.id;
  const sql = "SELECT * FROM reports WHERE woreda_id = ?";
  db.query(sql, [woreda_id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};
const getAllReportsLandZoneId = (req, res) => {
  const zone_id = req.params.id;
  const sql = "SELECT * FROM reports WHERE zone_id = ?";
  db.query(sql, [zone_id], (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
      res.status(500).send(err.message);
    }
  });
};


const deleteReport =  (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM reports WHERE id = ?";
    const values = [id];

     db.query(query, values);

    res.status(204).end();
  } catch (error) {
    console.error("Error deleting report", error);
    res.status(500).json({ error: "Failed to delete report" });
  }
};

module.exports = {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport,
  authenticateUser,
  getAllReportsLandAdminId,
  getAllReportsLandKebeleId,
  getAllReportsLandWoredaId,
  getAllReportsLandZoneId,
};
