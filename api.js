const express = require("express");
const dbConnect = require("./mongodb");

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "hitesh" });
});

app.listen(5000);
