const express = require("express");
const formidableMiddleware = require("express-formidable");
require("dotenv").config();

const app = express();
app.use(formidableMiddleware());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/vinted");
const User = require("./models/User");

app.get("/", (req, res) => {
  res.json({ response: "Hello World" });
});

app.post("/create-user", async (req, res) => {
  try {
    console.log(req.fields);
    const { username, email, token } = req.fields;
    const newUser = new User({
      username: username,
      email: email,
      token: token,
    });
    await newUser.save();

    res.json({ message: "user created", user: newUser });
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server Start");
});
