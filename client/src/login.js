import axios from 'axios';

const authorization = async (email, password, options) => {
  if (options.validateForm()) {
    options.loginUser();
  }

  const data = {
    email: email,
    password: password,
  };

  let USER_TOKEN;

  await axios
    .post('http://localhost:3002/login', JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      USER_TOKEN = response.data.data.access_token;
      if (options.loginUser && response.status === 200) {
        options.appValue.setUserData(JSON.parse(localStorage.getItem('user')));
        options.navigate('/', { replace: true });
      }
    })
    .catch((error) => {
      console.log(error);
      alert('Sai Email hoặc Mật khẩu. Vui lòng thử lại!');
    });

  const AuthStr = `Bearer ${USER_TOKEN}`;

  await axios
    .get('http://localhost:3002/products', {
      headers: { Authorization: AuthStr },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default authorization;
