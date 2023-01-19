const express = require("express");
var cors = require("cors");
const router = require("./router/route");
const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api", router);
module.exports = app;




