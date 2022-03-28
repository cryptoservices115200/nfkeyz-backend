const mongoose = require("mongoose");
const Whitelist = mongoose.model(
  "Whitelist",
  new mongoose.Schema({
    address: String,
  })
);
module.exports = Whitelist;
