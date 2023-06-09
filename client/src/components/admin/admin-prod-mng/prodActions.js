import axios from 'axios';

const user = JSON.parse(localStorage.getItem('user'));
let AuthStr = '';
if (user) {
  AuthStr = `Bearer ${user.access_token}`;
}
const productActions = {};

productActions.editProduct = async (id, navigate) => {};

productActions.deleteProduct = async (id, navigate) => {
  await axios
    .delete(`http://localhost:8000/products/id/${id}`, {
      headers: {
        Authorization: AuthStr,
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      console.log('Product deleted!');
      navigate(0);
    });
};

export default productActions;
