const orderModel = require("../models/oderModel");
const orderService = {};

orderService.getOrder = async (userId) => {
  const order = await orderModel
    .find({ userOrder: { _id: userId } })
    .populate("userOrder", "email")
    .populate("listOrder");
  if (!order) {
    return;
  }
  return order;
};

orderService.createOrder = async (order) => {
  const or = await orderModel.create(order);
  await or.save();
  if (!order) {
    return;
  }
  return or.toObject();
};

module.exports = orderService;
