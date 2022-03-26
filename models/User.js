const mongoose = require("mongoose");

const User = mongoose.model("User", {
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  token: { type: String, unique: true },
  salt: String,
  hash: String,
  age: Number,
  profilPictureUrl: String,
});

module.exports = User;
