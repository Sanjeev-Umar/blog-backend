const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"],
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: true,
    validate: [validator.isEmail, "Please provide valid email."],
  },
  password: {
    type: String,
    required: [true, "Must have a password"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "Must confirm Password"],
    validate: {
      validator: function (el) {
        return el === this.pasword;
      },
      message: "Password are not the same",
    },
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    required: [true, "User must have a role"],
  },
  Blogs: [],
});

User.Schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;

  next();
});

const User = mongoose.Model("User", userSchema);

module.exports = User;
