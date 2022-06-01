const res = require("express/lib/response");
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
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      throw new Error();
    }

    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: "Data not found!",
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    console.log(req.body);
    const newBlog = await Blog.create({
      title: req.body.title,
      description: req.body.description,
    });

    res.status(201).json({
      status: "success",
      data: newBlog,
    });
  } catch (err) {
    res.status(401).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    await Blog.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(403).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: updatedBlog,
    });
  } catch (err) {
    res.status(403).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};
