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
    req.user = { id: decoded.user_id };

    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

const createReport = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    const query = `
      INSERT INTO reports (title, content, rep_id, createAt, updateAt) VALUES (?, ?, ?, NOW(), NOW())
    `;
    const values = [title, content, userId];

    await db.query(query, values);
    
const reportId = await db.lastInsertId();


    const reportData = {
      title,
      content,
      rep_id: userId,
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


const updateReport = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const query = `
      UPDATE reports
      SET title = ?, content = ?, updateAt = NOW()
      WHERE id = ?
    `;
    const values = [title, content, id];

    await db.query(query, values);

    res.json({ message: "Report updated successfully" });
  } catch (error) {
    console.error("Error updating report", error);
    res.status(500).json({ error: "Failed to update report" });
  }
};

const getAllReports = async (req, res) => {
  try {
    const query = "SELECT * FROM reports";

    const [rows] = await db.query(query);

    res.json(rows);
  } catch (error) {
    console.error("Error retrieving reports", error);
    res.status(500).json({ error: "Failed to retrieve reports" });
  }
};
const getReportById = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "SELECT * FROM reports WHERE id = ?";
    const values = [id];

    const [report] = await db.query(query, values);

    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }

    res.json(report);
  } catch (error) {
    console.error("Error retrieving report", error);
    res.status(500).json({ error: "Failed to retrieve report" });
  }
};

const deleteReport = async (req, res) => {
  const { id } = req.params;

  try {
    const query = "DELETE FROM reports WHERE id = ?";
    const values = [id];

    await db.query(query, values);

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
};
