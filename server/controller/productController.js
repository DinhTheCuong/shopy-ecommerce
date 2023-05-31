const uploadCloud = require("../cloudinary");

const productController = (router, service) => {
  const productService = service;

  // Upload Image
  router.post(
    "/products/upload",
    uploadCloud.array("file", 3000),
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
    },
  );

  // Create Product
  router.post("/products", async (req, res, next) => {
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

  router.get("/products", async (req, res, next) => {
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

  router.get("/products/name/:name", async (req, res, next) => {
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

  router.get("/products/id/:id", async (req, res, next) => {
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

  router.get("/products/rate/:rate", async (req, res, next) => {
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

  router.put("/products/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      const prod = await productService.updateProductById(id);
      res.status(200).json(prod);
    } catch (error) {
      res.json({
        message: "Update product failed!",
      });
    }
  });

  router.delete("/products/id/:id", async (req, res, next) => {
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

  router.delete("/products/name/:name", async (req, res, next) => {
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
