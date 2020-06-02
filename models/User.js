const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  mobileNumber: String,
  email: String,
  address: String,
  phoneNumber: String,
  facility: String,
});

mongoose.model("users", userSchema);
