const jwt = require("jsonwebtoken");
const db = require("../config/connection_db.js");

const LoginUsers = async (req, res) => {
  try {
    const { phone_number, password } = req.body;

    if (!phone_number || !password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    db.query(
      "SELECT * FROM users WHERE phone_number = ? && password = ?",
      [phone_number, password],
      async (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Error logging in" });
        }

        if (results.length > 0) {
          const user = results[0];
          const token = jwt.sign(
            { rep_id: user.rep_id, farmers_id :user.farmers_id, phonenumber: user.phone_number },
            "chachu"
          );
          console.log(user);
          db.query(
            "SELECT name FROM roles WHERE id = ?",
            [user.role_id],
            (error, roleResults) => {
              if (error) {
                console.error(error);
                return res.status(500).json({ message: "Error logging in" });
              }

              const roleName = roleResults[0].name;
              // Return success response with the token, role name, and user information
              res.status(200).json({
                message: "Login successful",
                token,
                role: roleName,
                rep_id: user.rep_id,
                farmers_id :user.farmers_id,
                phone_number: user.phone_number,
                user_name: user.user_name,
              });
            }
          );
        } else {
          console.log("Wrong password or username");
          res.status(401).json({ message: "Invalid credentials" });
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};
module.exports = { LoginUsers };
