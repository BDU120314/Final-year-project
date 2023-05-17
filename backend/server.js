const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require("./routes_part/farmers_route");
const woreda_router = require("./routes_part/woreda_route");
const zone_router = require("./routes_part/zone_route");
const distributor_router = require("./routes_part/distributor_route");
const land_admin_router = require("./routes_part/land_admin_route");
const order_route = require("./routes_part/orders_route");
const report_route = require("./routes_part/report_route");
const Login_Route = require("./routes_part/login_route");
const cookieParser = require("cookie-parser");
const Logout_Route = require("./routes_part/logout");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const PORT = process.env.PORT || 5001;
app.use(bodyparser.json());
//middleware

//route/
 
app.use("/api/v1/farmers", router);
app.use("/api/v1/woreda", woreda_router);
app.use("/api/v1/zone", zone_router);
app.use("/api/v1/distributor", distributor_router);
app.use("/api/v1/kebele", land_admin_router);
app.use("/api/v1/order", order_route);
app.use("/api/v1/report", report_route);
app.use("/api/v1/login", Login_Route);
app.get("/api.v1/protected", (req, res) => {
  // Verify JWT token and allow access to protected resource
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    } else {
      return res.json({ message: "Protected resource accessed successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
