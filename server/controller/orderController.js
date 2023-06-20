const orderController = (router, middleware, service) => {
  const orderService = service;

  router.get("/", async (req, res) => {
    try {
      const order = await orderService.getAllOrder();
      res.status(200).json(order);
    } catch (error) {
      res.json({
        message: "Get order fail!",
      });
    }
  });

  router.post("/", async (req, res) => {
    const order = req.body;
    try {
      const or = await orderService.createOrder(order);
      res.status(200).json(or);
    } catch (error) {
      res.json({
        message: "Create order fail!",
      });
    }
  });

  return router;
};
module.exports = orderController;
