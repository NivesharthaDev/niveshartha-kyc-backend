const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/routes");
const path = require("path")
app.use(express.json({limit:"50mb"}));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

module.exports = app;
