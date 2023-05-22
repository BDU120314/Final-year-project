 
 
const db = require("../config/connection_db.js")

const LoginUsers = async (req, res) => {
  try {
    const { user_name, password } = req.body;

    if (!user_name || !password) {
      return res.status(400).json({ message: "Invalid credentials" });
 
    }
    db.query(
      "SELECT * FROM users WHERE user_name = ? && password = ?",
      [user_name, password],
      async (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Error logging in" });
        }

        if (results.length > 0) {

          const user = results[0]
           db.query(
             "SELECT name FROM roles WHERE id = ?",
             [user.role_id],
             (error, roleResults) => {
               if (error) {
                 console.error(error);
                 return res.status(500).json({ message: "Error logging in" });
               }

               const roleName = roleResults[0].name;

               // Return success response with the token and role name
               res.status(200).json({
                 message: "Login successful",
                 role: roleName,
               });
             }
           );
        }else{
          console.log("wrong password and user name")
        }
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports = LoginUsers ;