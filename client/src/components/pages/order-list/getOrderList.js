import axios from 'axios';

const getOrderList = async (setOrderData) => {
  const res = await axios.get('http://localhost:8000/orders');
  setOrderData(res.data);
};

export default getOrderList;
