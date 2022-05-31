const Blog = require("../Model/blogModel");

exports.getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});

    res.status(200).json({
      status: "success",
      data: allBlogs,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "Data not found!",
    });
  }
};

exports.getBlog = async (req, res) => {
  res.status(200).json({
    status: "success",
    data: [],
  });
};
