const express = require("express");
const blogRouter = require("./Routes/blogRoutes");
const userRouter = require("./Routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;
