console.clear();
require("dotenv").config();
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const app = express();

const { privateRouteMidd } = require("./auth");
const { getUserData } = require("./user");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.post("/login", async (req, res, next) => {
  try {
    const userData = await getUserData();
    const { username, password } = req.body;
    console.log(req.body);
    console.log({ username, password });
    if (username !== userData.username || !password) {
      throw new Error("username or password incorrect");
    }

    const passwordMatch = await bcrypt.compare(password, userData.password);
    if (!passwordMatch) throw new Error("username or password incorrect");

    const tokenPayload = { username: userData.username };
    const token = jwt.sign(tokenPayload, process.env.SECRET, {
      expiresIn: "30 days",
    });

    res.send({ status: "ok", data: token });
  } catch (e) {
    next(e);
  }
});

app.get("/user", privateRouteMidd, async (req, res, next) => {
  try {
    const userData = await getUserData();
    delete userData.password;
    res.send({ status: "ok", data: userData });
  } catch (e) {
    next(e);
  }
});

app.use((req, res) => {
  res.status(404);
  res.send("Not found");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.httpStatus || 500).send({
    status: "error",
    message: error.message,
  });
});

app.listen(5000, () => console.log(`Listening in localhost:5000`));
