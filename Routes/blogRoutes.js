const express = require("express");
const blogControllers = require("../Controller/blogController");

const router = express.Router();

router
  .route("/")
  .get(blogControllers.getAllBlogs)
  .post(blogControllers.createBlog);

router
  .route("/:id")
  .get(blogControllers.getBlog)
  .delete(blogControllers.deleteBlog)
  .patch(blogControllers.updateBlog);

module.exports = router;
