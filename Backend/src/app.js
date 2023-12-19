const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./routes/userRoute");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/user", userRouter);

module.exports = app;
