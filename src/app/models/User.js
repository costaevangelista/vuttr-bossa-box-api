const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 8;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

UserSchema.pre("save", async function(next) {
  this.password = await bcrypt.hashSync(this.password, saltRounds);
  next();
});

UserSchema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateToken = function() {
  return jwt.sign({ id: this.id }, process.env.APP_SECRET);
};

module.exports = mongoose.model("User", UserSchema);
