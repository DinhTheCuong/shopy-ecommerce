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
    .post(
      'http://localhost:8000/login',
      JSON.stringify(data),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    .then((response) => {
      USER_TOKEN = response.data.access_token;

      if (options.loginUser && response.status === 200) {
        options.appValue.setUserData(
          JSON.parse(localStorage.getItem('user'))
        );
        if (response.data.roles[0] === 'ADMIN') {
          options.navigate('/admin-page/add-product', {
            replace: true,
          });
        } else {
          options.navigate('/', {
            replace: true,
          });
        }
      }
    })
    .catch((error) => {
      console.log(error);
      alert('Sai Email hoặc Mật khẩu. Vui lòng thử lại!');
    });

  const AuthStr = `Bearer ${USER_TOKEN}`;

  await axios
    .get('http://localhost:8000/products', {
      headers: { Authorization: AuthStr },
    })
    .then((response) => {
      console.log(response.data.products);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default authorization;
