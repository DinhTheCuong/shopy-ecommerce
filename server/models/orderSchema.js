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
        id: mongoose.Schema.Types.ObjectId,
        amount: Number,
      },
    ],
  },
  {
    timestamps: true,
  },
);
module.exports = OrderSchema;
