const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String },
  title: { type: String },
  price: { type: Number },
  description: { type: String },
  image: { type: String },
});
module.exports = mongoose.model("products", ProductSchema);
