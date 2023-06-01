import axios from 'axios';
import { USER_TOKEN } from '../../login';

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

  const AuthStr = `Bearer ${USER_TOKEN}`;

  if (!options.validateForm()) {
    console.log('No data uploaded!');
    return;
  }

  await axios
    .post(
      'http://localhost:8000/products/upload',
      imagesUpload,
      {
        headers: {
          Authorization: AuthStr,
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    .then((response) => {
      const imageURL = response.data.url;
      const updateData = {
        ...data,
        images: imageURL,
      };
      console.log(JSON.stringify(imageURL));
      axios
        .post(
          'http://localhost:8000/products',
          JSON.stringify(updateData),
          {
            headers: {
              Authorization: AuthStr,
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          console.log('Product created!', res);
        });
    });
};

export default uploadProd;
