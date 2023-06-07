import './style.css';
import { BiEdit } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';
import { useContext } from 'react';
import axios from 'axios';

const AdminProdMng = () => {
  const appValue = useContext(AppContext);
  const viewProducts = appValue.data;

  const adminDeleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/products/id/:${id}`);
    console.log('del prod success');
  };

  return (
    <div className='admin-prod-mng'>
      <p className='prod-mng-title'>Products Management</p>
      <Link
        to='/admin-page/add-product'
        className='add-prod-btn'
      >
        Add Product
      </Link>
      <div className='admin-prod-grid'>
        <div className='admin-prod-mng-header'>
          <div className='admin-prod-header-item'>PRODUCT</div>
          <div className='admin-prod-header-item'>QUANTITY</div>
          <div className='admin-prod-header-item'>PRICE</div>
          <div className='admin-prod-header-item'>RATE</div>
          <div className='admin-prod-header-item'>STATUS</div>
          <div className='admin-prod-header-item'>ACTION</div>
        </div>
        {viewProducts.map((element) => (
          <div
            key={element._id}
            className='admin-prod-mng-card'
          >
            <div className='admin-prod-name'>
              <img
                src={element.images[0]}
                alt='product'
              />
              <p>{element.title}</p>
            </div>
            <div className='admin-prod-quantity'>
              {element.quantity ? element.quantity : '9999'}
            </div>
            <div className='admin-prod-price'>
              <span>$ </span> {element.price.$numberDecimal}
            </div>
            <div className='admin-prod-rate'>
              {element.rating ? element.rating : 5}
            </div>
            <div className='admin-prod-status'>
              <p>{element.status ? element.status : 'Active'}</p>
            </div>
            <div className='admin-prod-action'>
              <BiEdit className='admin-prod-edit-icon' />
              <FiDelete
                className='admin-prod-delete-icon'
                onClick={() => adminDeleteProduct(element._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProdMng;
