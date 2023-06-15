import axios from 'axios';
// import setFilter from './setFilter';

const filter = (check, filterBy, value, products, setProducts) => {
  const getApi = async (category) => {
    const res = await axios.get(
      `http://localhost:8000/products/${filterBy}/${category}`
    );
    setProducts(res.data);
  };

  if (check === 'on' && value) {
    getApi(value);
    // setFilter(products, value);
  }
};

export default filter;
