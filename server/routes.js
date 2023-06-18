const rootRouter = require("express").Router();
const authRouter = require("./router/authRouter");
const productRouter = require("./router/productRouter");
const orderRouter = require("./router/orderRouter");
const payloadFormatMdw = require("./middleware/payloadFormatMdw");

rootRouter.use(authRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/orders", orderRouter);
rootRouter.use(payloadFormatMdw);

module.exports = rootRouter;
