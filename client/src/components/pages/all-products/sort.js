const sortProduct = (options, products, setProducts, allProducts) => {
  if (options === 'increase') {
    setProducts(
      products.sort((a, b) => a.price.$numberDecimal - b.price.$numberDecimal)
    );
  } else if (options === 'decrease') {
    setProducts(
      products.sort((a, b) => b.price.$numberDecimal - a.price.$numberDecimal)
    );
  } else {
    setProducts(allProducts);
  }
};

export default sortProduct;
