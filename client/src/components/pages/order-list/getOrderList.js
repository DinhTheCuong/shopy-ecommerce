import axios from 'axios';

const getOrderList = async (id, token, setOrderData) => {
  const AuthStr = `Bearer ${token}`;

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://localhost:8000/orders/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: AuthStr,
    },
  };

  axios
    .request(config)
    .then((response) => {
      setOrderData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getOrderList;
