const rootRouter = require("express").Router();
const authRouter = require("./router/authRouter");
const productRouter = require("./router/productRouter");
// const loadLoginMdw = require("./middleware/loadLoginMdw");
const payloadFormatMdw = require("./middleware/payloadFormatMdw");
const verifyToken = require("./middleware/verifyTokenMdw");

// rootRouter.use(loadLoginMdw);
rootRouter.use(authRouter);
rootRouter.use(verifyToken, productRouter);
rootRouter.use(payloadFormatMdw);

module.exports = rootRouter;
