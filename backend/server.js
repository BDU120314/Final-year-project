const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require("./routes_part/farmers_route");
const woreda_router = require("./routes_part/woreda_route");
const zone_router = require("./routes_part/zone_route");
const distributor_router = require("./routes_part/distributor_route");
const land_admin_router = require("./routes_part/land_admin_route");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(bodyparser.json());
//middleware

//route
app.use("/api/v1/farmers", router);
app.use("/api/v1/woreda", woreda_router);
app.use("/api/v1/zone", zone_router);
app.use("/api/v1/distributor", distributor_router);
app.use("/api/v1/admin", land_admin_router);




app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
