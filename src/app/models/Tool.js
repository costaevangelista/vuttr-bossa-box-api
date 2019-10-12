const mongoose = require("mongoose");

const ToolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title field is required!"]
  },
  link: {
    type: String,
    required: [true, "link field is required!"]
  },
  description: {
    type: String,
    required: [true, "Description field is required!"]
  },
  tags: {
    type: [String],
    required: [true, "Tag field is required!"]
  }
});

module.exports = mongoose.model("Tool", ToolSchema);
