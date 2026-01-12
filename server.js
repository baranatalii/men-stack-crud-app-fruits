const express = require("express");
const logger = require("morgan");
const db = require("./db/connection.js");

const app = express();

app.use(logger("dev"));

//Routes
app.get("/", (req, res) => {
  // res.send("You are on the landing page.")
  res.render("index.ejs");
});

db.on("connected", () => {
  console.clear();
  console.log("You are connected to the Database");

  app.listen(3000, () => {
    console.log("Your server is running on PORT 3000");
  });
});
