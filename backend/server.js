const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require("./routes_part/farmers_route");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(bodyparser.json());
//middleware

//route
app.use("/api/v1/farmers", router);


app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT} `);
});
