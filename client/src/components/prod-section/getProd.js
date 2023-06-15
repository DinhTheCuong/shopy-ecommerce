import axios from 'axios';

const getProd = async (id, navigate) => {
  const res = await axios.get(`http://localhost:8000/products/id/${id}`);
};

export default getProd;
