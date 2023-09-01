const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
  },
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: [true, "email address already taken"],
  },
  phoneNumber: {
    type: String,
    required: [true, "please provide a phoneNumber"],
    unique: [true, "phone number already taken"],
  },
  password: {
    type: String,
    required: [true, "please provide a password"],
  },
});

module.exports = mongoose.model("user", userSchema);
