const mongoose = require("mongoose");
const { Schema } = mongoose;
const OrderSchema = new Schema(
  {
    userOrder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    listOrder: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
    ],
  },
  {
    timestamps: true,
  },
);
module.exports = OrderSchema;
