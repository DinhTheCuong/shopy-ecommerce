const orderRouter = require("express").Router();
const orderService = require("../service/orderService");
const orderController = require("../controller/orderController");
const verifyToken = require("../middleware/verifyTokenMdw");

orderController(orderRouter, verifyToken, orderService);

module.exports = orderRouter;
