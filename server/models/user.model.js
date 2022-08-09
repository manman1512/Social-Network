const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  passwordConfirm:{
    type: String,
    require: true,
  },
  // email:{
  //   type: String,
  //   require: false,
  // },
  // address:{
  //   type: String,
  //   require: false
  // },
  // phoneNumber:{
  //    type: String,
  //    require: false
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", userSchema);
