const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: String,
  likes: Number,
  body: String,
  category: String,
  tags: Array,
  date: Date,
});

module.exports = mongoose.model("products", productSchema);
