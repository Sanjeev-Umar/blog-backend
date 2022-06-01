const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: String,
  text: String,
  createdAt: Date.now(),
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
