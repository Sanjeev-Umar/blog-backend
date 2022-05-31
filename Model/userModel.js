const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    required: [true, "User must have a role"],
  },
  Blogs: [],
});

const User = mongoose.Model("User", userSchema);
