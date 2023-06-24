const orderController = (router, middleware, service) => {
  const orderService = service;

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const order = await orderService.getOrder(id);
      res.status(200).json(order);
    } catch (error) {
      res.json({
        message: "Get order fail!",
      });
    }
  });

  router.post("/", middleware, async (req, res) => {
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
