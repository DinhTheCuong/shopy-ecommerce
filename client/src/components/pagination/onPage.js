import axios from 'axios';

const onPage = async (value, pageNumber, setProductsOnPage) => {
  if (value === 'on' && pageNumber === 1) {
    await axios
      .get(`http://localhost:8000/products/page/${pageNumber}`)
      .then((res) => {
        setProductsOnPage(res.data.products);
      });
    window.scrollTo(0, 0);
  }
  if (value === 'on' && pageNumber === 2) {
    await axios
      .get(`http://localhost:8000/products/page/${pageNumber}`)
      .then((res) => {
        setProductsOnPage(res.data.products);
      });
    window.scrollTo(0, 0);
  }
  if (value === 'on' && pageNumber === 3) {
    await axios
      .get(`http://localhost:8000/products/page/${pageNumber}`)
      .then((res) => {
        setProductsOnPage(res.data.products);
      });
    window.scrollTo(0, 0);
  }
};

export default onPage;
