import axios from 'axios';

const onPage = async (value, pageNumber, setProductsOnPage) => {
  if (value === 'on' && pageNumber === 1) {
    console.log('Click 1');
    await axios
      .get(`http://localhost:8000/products/page/${pageNumber}`)
      .then((res) => {
        setProductsOnPage(res.data.products);
      });
  }
  if (value === 'on' && pageNumber === 2) {
    console.log('Click 1');
    await axios
      .get(`http://localhost:8000/products/page/${pageNumber}`)
      .then((res) => {
        setProductsOnPage(res.data.products);
      });
  }
  if (value === 'on' && pageNumber === 3) {
    console.log('3');
  }
};

export default onPage;
