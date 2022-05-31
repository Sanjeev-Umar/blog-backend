const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE_STRING.replace(
  "<password>",
  process.env.PASSWORD
);
console.log(DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("DATA BASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.config.PORT || 3000;

app.listen(port, () => {
  console.log("Server listining");
});
