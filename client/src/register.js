import axios from 'axios';

const createUser = async (email, password, confirmPassword, options) => {
  if (options.validateForm()) {
    options.registerUser();
  }
  const data = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };
  try {
    await axios.post('http://localhost:3002/register', JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
    if (options.validateForm && options.registerUser) {
      options.navigate('/login', { replace: true });
    }
  } catch (error) {
    console.log(error);
    alert('Sai Email hoặc Mật khẩu. Vui lòng thử lại!');
  }
};

export default createUser;
