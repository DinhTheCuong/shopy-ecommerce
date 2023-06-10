import axios from 'axios';

const authorization = async (email, password, options) => {
  options.validateForm();
  const data = {
    email: email,
    password: password,
  };

  await axios
    .post('http://localhost:8000/login', JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      const user = {
        access_token: response.data.access_token,
        email: response.data.email,
        roles: response.data.roles[0],
        loggedIn: true,
      };
      localStorage.setItem('user', JSON.stringify(user));

      if (user.loggedIn && response.status === 200) {
        options.appValue.setUserData(JSON.parse(localStorage.getItem('user')));

        if (user.roles === 'ADMIN') {
          options.navigate('/admin-page/products-manager', {
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
};

export default authorization;
