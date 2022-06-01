const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must have a Title"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Must have a description"],
  },
  image: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
