const path = require("path");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const api = require("./routes/api");

const app = express();

app.use(
  cors({
    origin: "http://localhost:1302",
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.use("/v1", api);

module.exports = app;
