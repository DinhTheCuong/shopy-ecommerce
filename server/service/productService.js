const productModel = require("../models/productModel");
const productService = {};

productService.createProduct = async (payload) => {
  const prod = await productModel.create(payload);
  await prod.save();
  return prod.toObject();
};

productService.getAllProduct = async () => {
  const prod = await productModel.find();
  if (!prod) {
    console.log("Get product by name error: Product Not Found!");
  }
  return prod;
};

productService.getAllProductByPage = async (page) => {
  const bookPerPage = 6;
  const prod = await productModel
    .find()
    .skip(bookPerPage * (page - 1))
    .limit(bookPerPage);
  if (!prod) {
    console.log("Get product by name error: Product Not Found!");
  }
  return prod;
};

productService.getProductByName = async (desc) => {
  const prod = await productModel.find({ description: desc });
  if (!prod) {
    console.log("Get product by name error: Product Not Found!");
  }
  return prod;
};

productService.getProductByCategory = async (value) => {
  const prod = await productModel.find({ category: value });
  if (!prod) {
    console.log("Get product by category error: Product Not Found!");
  }
  return prod;
};

productService.getProductByBrand = async (value) => {
  const prod = await productModel.find({ brand: value });
  if (!prod) {
    console.log("Get product by category error: Product Not Found!");
  }
  return prod;
};

productService.getProductById = async (id) => {
  const prod = await productModel.findById({ _id: id });
  if (!prod) {
    console.log("Get product by id error: Product Not Found!");
  }
  return prod.toObject();
};

productService.getProductByRate = async (rate) => {
  const prod = await productModel.find({ rating: rate });
  if (!prod) {
    console.log("Get product by rating error: Product Not Found!");
  }
  return prod;
};

productService.updateProductById = async (id, payload) => {
  const prod = await productModel.findOneAndUpdate({ _id: id }, payload);
  if (!prod) {
    console.log("Update product by name error: Product Not Found!");
  }
  return prod.toObject();
};

productService.deleteProductById = async (id) => {
  const prod = await productModel.findByIdAndDelete({ _id: id });
  if (!prod) {
    console.log("Delete product by id error: Product Not Found!");
  }
  return prod.toObject();
};

productService.deleteProductByName = async (desc) => {
  const prod = await productModel.findOneAndDelete({ description: desc });
  if (!prod) {
    console.log("Delete product by name error: Product Not Found!");
  }
  return prod.toObject();
};

module.exports = productService;
