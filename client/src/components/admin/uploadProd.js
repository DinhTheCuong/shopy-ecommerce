import axios from 'axios';

const uploadProd = async (req, imagesUpload, options) => {
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
    window.alert('Please fill all the fields!');
    console.log('No data uploaded!');
    return;
  }

  await axios
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
        .post('http://localhost:8000/products', JSON.stringify(updateData), {
          headers: {
            Authorization: AuthStr,
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          console.log('Product created!');
          options.navigate('/admin-page/products-manager');
          options.navigate(0);
        });
    });
};

export default uploadProd;
