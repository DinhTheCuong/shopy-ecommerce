import axios from 'axios';

const getOrderList = async () => {
  const res = await axios.get('http://localhost:8000/orders');
  console.log(res.data);
};

export default getOrderList;
