const express = require ("express");
const dotenv = require("dotenv");
const Router = require("./routes/router");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

dotenv.config({path:"./config.env"});

app.use(express.json());
app.use(cors())
app.use(morgan("dev"));



app.use("/",Router);

module.exports = app;
