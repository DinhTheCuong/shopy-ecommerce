const mongoose = require("mongoose");
const orderSchema = require("./orderSchema");
const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;
