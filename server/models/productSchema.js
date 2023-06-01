const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  price: mongoose.Schema.Types.Decimal128,
  discountPercentage: mongoose.Schema.Types.Decimal128,
  rating: mongoose.Schema.Types.Decimal128,
  stock: mongoose.Schema.Types.Decimal128,
  brand: String,
  category: String,
  thumbnail: String,
  images: Array,
});

module.exports = productSchema;
