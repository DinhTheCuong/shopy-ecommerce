import axios from 'axios';

const filter = (check, filterBy, value, products, setProducts) => {
  const getApi = async (category) => {
    const res = await axios.get(
      `http://localhost:8000/products/${filterBy}/${category}`
    );
    setProducts(res.data);
  };

  if (check === 'on' && value) {
    getApi(value);
  }
};

export default filter;
