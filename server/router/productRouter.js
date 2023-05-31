const productRouter = require("express").Router();
const productService = require("../service/productService");
const productController = require("../controller/productController");
const verifyToken = require("../middleware/verifyTokenMdw");

productController(productRouter, verifyToken, productService);

module.exports = productRouter;
