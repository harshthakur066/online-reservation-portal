const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  mobileNumber: Number,
  email: String,
  address: String,
  phoneNumber: Number,
  facility: String,
});

mongoose.model("users", userSchema);
