const db = require("../config/connection_db");
const jwt = require("jsonwebtoken")
const LoginUsers = async (req, res) => {
  const { user_name, password, role } = req.body;

  try {
    let sql;
    switch (role) {
      case "Farmer":
        sql = "SELECT * FROM farmers WHERE user_name = ? AND password = ?";
        await db.query(sql, [user_name, password], (error, result) => {
          if (result.length > 0) {
            const id = result[0].id
            const token = jwt.sign({id}, "jwtSecretKey", {expiresIn:10000})
            return res
              .status(200)
              .json({ message: "farmer is Login successful", token, result });
          } else {
            // console.log("user is not found");
            return res
              .status(401)
              .json({ error: "Invalid user_name email or password" });
          }
        });
        break;
      case "Land_Admin":
        sql = "SELECT * FROM `land-admin` WHERE user_name = ? AND password = ?";
        result = await db.query(sql, [user_name, password], (error, result) => {
          if (result.length > 0) {
            return res
              .status(200)
              .json({ message: "land admin is Login successful" });
          } else {
            // console.log("user is not found");
            // console.log(error);
            return res
              .status(401)
              .json({ error: "Invaluser_name email or password" });
          }
        });
        break;
      case "Woreda_Admin":
        sql = "SELECT * FROM woreda WHERE user_name = ? AND password = ?";
        result = await db.query(sql, [user_name, password], (error, result) => {
          if (result.length > 0) {
            return res
              .status(200)
              .json({ message: "woreda admin is Login successful" });
          } else {
            // console.log("user is not found");
            // console.log(error);
            return res
              .status(401)
              .json({ error: "Invaluser_name email or password" });
          }
        });
        break;
      case "Zone_Admin":
        sql = "SELECT * FROM zone WHERE user_name = ? AND password = ?";
        result = await db.query(sql, [user_name, password], (error, result) => {
          if (result.length > 0) {
            return res
              .status(200)
              .json({ message: "zone admin is Login successful" });
          } else {
            // console.log("user is not found");
            // console.log(error);
            return res
              .status(401)
              .json({ error: "Invaluser_name email or password" });
          }
        });
        break;
      case "Distributor":
        sql = "SELECT * FROM distributor WHERE user_name = ? AND password = ?";
        result = await db.query(sql, [user_name, password], (error, result) => {
          if (result.length > 0) {
            return res
              .status(200)
              .json({ message: "distributor is Login successful" });
          } else {
            // console.log("user is not found");
            // console.log(error);
            return res
              .status(401)
              .json({ error: "Invaluser_name email or password" });
          }
        });
        break;
      default:
        return res.status(400).json({ error: "Invaluser_name role" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
module.exports = LoginUsers;
