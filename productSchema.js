const mongoose = require("mongoose");
module.exports = productSchema = new mongoose.Schema({
  title: String,
  body: String,
  category: String,
  likes: Number,
  tags: Array,
  date: Date,
});
