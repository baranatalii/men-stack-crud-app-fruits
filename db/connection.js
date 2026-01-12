const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("returnOriginal", false);

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("Disconnected from MONGODB!");
});

module.exports = mongoose.connection;
