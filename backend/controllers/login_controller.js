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

module.exports = { LoginUsers };

// try {
//   let sql;
//   switch (role) {
//     case "Region_Admin":
//       sql = "SELECT * FROM users WHERE user_name = ? AND password = ?";
//       await db.query(sql, [user_name, password], (error, result) => {
//         if (result.length > 0) {
//           const id = result[0].id
//           // const token = jwt.sign({id}), "jwtSecretKey", {expiresIn:10000}
//           return res
//             .status(200)
//             .json({ message: "Admin is Login successful" });
//         } else {
//           // console.log("user is not found");
//           return res
//             .status(401)
//             .json({ error: "Invalid user_name email or password" });
//         }
//       });
//       break;
//     case "Farmer":
//       sql = "SELECT * FROM users WHERE user_name = ? AND password = ?";
//       await db.query(sql, [user_name, encryptedPassword], (error, result) => {
//         if (result.length > 0) {
//           const id = result[0].id;
//           const token = jwt.sign({ id }, "jwtSecretKey", {
//             expiresIn: 10000,
//           });
//           return res
//             .status(200)
//             .json({ message: "farmer is Login successful", token, result });
//         } else {
//           // console.log("user is not found");
//           return res
//             .status(401)
//             .json({ error: "Invalid user_name email or password" });
//         }
//       });
//       break;
//     case "Land_Admin":
//       sql = "SELECT * FROM `users` WHERE user_name = ? AND password = ?";
//       result = await db.query(sql, [user_name, password], (error, result) => {
//         if (result.length > 0) {
//           return res
//             .status(200)
//             .json({ message: "land admin is Login successful" });
//         } else {
//           // console.log("user is not found");
//           // console.log(error);
//           return res
//             .status(401)
//             .json({ error: "Invaluser_name email or password" });
//         }
//       });
//       break;
//     case "Woreda_Admin":
//       sql = "SELECT * FROM users WHERE user_name = ? AND password = ?";
//       result = await db.query(sql, [user_name, password], (error, result) => {
//         if (result.length > 0) {
//           return res
//             .status(200)
//             .json({ message: "woreda admin is Login successful" });
//         } else {
//           // console.log("user is not found");
//           // console.log(error);
//           return res
//             .status(401)
//             .json({ error: "Invaluser_name email or password" });
//         }
//       });
//       break;
//     case "Zone_Admin":
//       sql = "SELECT * FROM users WHERE user_name = ? AND password = ?";
//       result = await db.query(sql, [user_name, password], (error, result) => {
//         if (result.length > 0) {
//           return res
//             .status(200)
//             .json({ message: "zone admin is Login successful" });
//         } else {
//           // console.log("user is not found");
//           // console.log(error);
//           return res
//             .status(401)
//             .json({ error: "Invaluser_name email or password" });
//         }
//       });
//       break;
//     case "Distributor":
//       sql = "SELECT * FROM users WHERE user_name = ? AND password = ?";
//       result = await db.query(sql, [user_name, password], (error, result) => {
//         if (result.length > 0) {
//           return res
//             .status(200)
//             .json({ message: "distributor is Login successful" });
//         } else {
//           // console.log("user is not found");
//           // console.log(error);
//           return res
//             .status(401)
//             .json({ error: "Invaluser_name email or password" });
//         }
//       });
//       break;
//     default:
//       return res.status(400).json({ error: "Invaluser_name role" });
//   }
// } catch (error) {
//   console.error(error);
//   return res.status(500).json({ error: "Server error" });
// }
