const express = require("express");
const blogControllers = require("../Controller/blogController");

const router = express.Router();

router.route("/").get(blogControllers.getAllBlogs);

module.exports = router;
