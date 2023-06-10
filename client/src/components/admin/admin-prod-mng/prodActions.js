import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
let AuthStr = '';
if (user) {
  AuthStr = `Bearer ${user.access_token}`;
}
const productActions = {};

// Edit Product Function
productActions.editProduct = async (id, req, imagesUpload, options) => {
  const data = {
    title: req.title,
    category: req.category,
    brand: req.brand,
    price: req.price,
    discountPercentage: req.discountPercentage,
    description: req.description,
    images: {},
  };
  const USER_TOKEN = JSON.parse(localStorage.getItem('user')).access_token;
  const AuthStr = `Bearer ${USER_TOKEN}`;
  if (!options.validateForm()) {
    window.alert('Nothing was changed');
    console.log('No data to update!');
    return;
  }
  await axios
    // Upload Images to Cloudinary
    .post('http://localhost:8000/products/upload', imagesUpload, {
      headers: {
        Authorization: AuthStr,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      const imageURL = response.data.url;
      const updateData = {
        ...data,
        images: imageURL,
      };
      axios
        // Update Product
        .put(
          `http://localhost:8000/products/${id}`,
          JSON.stringify(updateData),
          {
            headers: {
              Authorization: AuthStr,
              'Content-Type': 'application/json',
            },
          }
        )
        .then(() => {
          console.log('Product has been updated!');
          options.navigate('/admin-page/products-manager');
          options.navigate(0);
        });
    });
};

// Delete Product Function
productActions.deleteProduct = async (id, navigate) => {
  const confirmDelete = window.confirm(
    'Are you sure you want to delete this product?'
  );
  if (confirmDelete) {
    await axios
      .delete(`http://localhost:8000/products/id/${id}`, {
        headers: {
          Authorization: AuthStr,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        console.log('Product deleted!');
        navigate('/admin-page/products-manager');
        navigate(0);
      });
  }
};

export default productActions;
