const express = require("express");
const blogRouter = require("./Routes/blogRoutes");

const app = express();

app.use("/api/v1/blog", blogRouter);

module.exports = app;
