require("dotenv").config();
const mongoose = require("mongoose");

const HOST =
  process.env.NODE_ENV === "test"
    ? process.env.DB_HOST_TEST
    : process.env.DB_HOST;

module.exports = mongoose.connect(HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
