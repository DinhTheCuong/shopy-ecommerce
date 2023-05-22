const rootRouter = require('express').Router();
const authRouter = require('./router/authRouter');
const loadLoginMdw = require('./middleware/loadLoginMdw');
const payloadFormatMdw = require('./middleware/payloadFormatMdw');

rootRouter.use(loadLoginMdw);
rootRouter.use(authRouter);
rootRouter.use('/products', (_, res) => {
  res.send('All products here!');
});
rootRouter.use(payloadFormatMdw);

module.exports = rootRouter;
