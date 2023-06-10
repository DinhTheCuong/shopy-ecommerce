const uploadCloud = require("../cloudinary");

const productController = (router, middleware, service) => {
  const productService = service;

  // Upload Image to Cloudinary
  router.post(
    "/upload",
    middleware,
    uploadCloud.any(),
    async (req, res, next) => {
      if (!req.files) {
        next(new Error("No file uploaded!"));
        return;
      }
      let url = [];
      for (let i = 0; i < req.files.length; i++) {
        url.push(req.files[i].path);
      }
      res.json({ url: url });
      console.log("Upload image successfully!");
    },
  );

  // Create Product
  router.post("/", middleware, async (req, res, next) => {
    const payload = req.body;
    try {
      const prod = await productService.createProduct(payload);
      res.status(200).json(prod);
    } catch (error) {
      res.json({
        meassage: "Create product failed!",
      });
    }
  });

  // Get All Product
  router.get("/", async (req, res, next) => {
    try {
      const prod = await productService.getAllProduct();
      res.status(200).json({
        products: prod,
      });
    } catch (error) {
      res.json({
        message: "Get product failed!",
      });
    }
  });

  // Get Product By Name
  router.get("/name/:name", async (req, res, next) => {
    const { name } = req.params;
    try {
      const prod = await productService.getProductByName(name);
      res.status(200).json(prod);
    } catch (error) {
      res.json({
        message: "Get product failed!",
      });
    }
  });

  // Get Product By ID
  router.get("/id/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const prod = await productService.getProductById(id);
      res.status(200).json(prod);
    } catch (error) {
      res.json({
        message: "Get product failed!",
      });
    }
  });

  // Get Product By Rate
  router.get("/rate/:rate", async (req, res, next) => {
    const { rate } = req.params;
    try {
      const prod = await productService.getProductById(rate);
      res.status(200).json(prod);
    } catch (error) {
      res.json({
        message: "Get product failed!",
      });
    }
  });

  // Update Product
  router.put("/:id", middleware, async (req, res, next) => {
    const { id } = req.params;
    const payload = req.body;
    try {
      const prod = await productService.updateProductById(id, payload);
      console.log("Product has been updated!");
      res.status(200).json(prod);
    } catch (error) {
      res.json({
        message: "Update product failed!",
      });
    }
  });

  // Delete Product By ID
  router.delete("/id/:id", middleware, async (req, res, next) => {
    const { id } = req.params;
    try {
      const prod = await productService.deleteProductById(id);
      res.status(200).json({
        message: "Delete successfully",
      });
    } catch (error) {
      res.json({
        message: "Delete product failed!",
      });
    }
  });

  // Delete Product By Name
  router.delete("/name/:name", middleware, async (req, res, next) => {
    const { name } = req.params;
    try {
      const prod = await productService.deleteProductByName(name);
      res.status(200).json({
        message: "Delete successfully",
      });
    } catch (error) {
      res.json({
        message: "Delete product failed!",
      });
    }
  });

  return router;
};

module.exports = productController;
