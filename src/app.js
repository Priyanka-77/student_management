const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

const studentRouter = require("./module/students/route");
app.use("/student", studentRouter);

module.exports = app;
