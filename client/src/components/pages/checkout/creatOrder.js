import axios from 'axios';

const createOrder = async (prodInfo, options) => {
  const USER_ID = JSON.parse(localStorage.getItem('user')).id;
  const USER_TOKEN = JSON.parse(localStorage.getItem('user')).access_token;
  const AuthStr = `Bearer ${USER_TOKEN}`;

  const data = {
    userOder: USER_ID,
    listOrder: [...prodInfo],
  };

  await axios
    .post('http://localhost:8000/orders', JSON.stringify(data), {
      headers: {
        Authorization: AuthStr,
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      console.log('Order Successfully!');
      options.navigate('/order', {
        replace: true,
      });
    });
};

export default createOrder;
