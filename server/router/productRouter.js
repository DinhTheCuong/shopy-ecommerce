const productRouter = require("express").Router();
const productService = require("../service/productService");
const productController = require("../controller/productController");

productController(productRouter, productService);

module.exports = productRouter;
