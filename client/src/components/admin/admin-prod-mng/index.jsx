import './style.css';
import { BiEdit } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../../App';
import { useContext } from 'react';
import productActions from './prodActions';
const AdminProdMng = () => {
  const appValue = useContext(AppContext);
  const viewProducts = appValue.data;
  const navigate = useNavigate();

  return (
    <div className='admin-prod-mng'>
      <p className='prod-mng-title'>Products Management</p>
      <div className='admin-prod-mng-head'>
        <p>
          Total products: <span>{viewProducts.length}</span>
        </p>
        <Link
          to='/admin-page/add-product'
          className='add-prod-btn'
        >
          Add Product
        </Link>
      </div>
      <div className='admin-prod-grid'>
        <div className='admin-prod-mng-header'>
          <div className='admin-prod-header-item'>ORD</div>
          <div className='admin-prod-header-item'>PRODUCT</div>
          <div className='admin-prod-header-item'>QUANTITY</div>
          <div className='admin-prod-header-item'>PRICE</div>
          <div className='admin-prod-header-item'>RATE</div>
          <div className='admin-prod-header-item'>STATUS</div>
          <div className='admin-prod-header-item'>ACTION</div>
        </div>
        {viewProducts.map((element, index) => (
          <div
            key={element._id}
            className='admin-prod-mng-card'
          >
            <div className='admin-prod-serrial'>
              {element.serial ? element.serial : index + 1}
            </div>
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
              {element.rating ? element.rating : 0}
            </div>
            <div className='admin-prod-status'>
              <p>{element.status ? element.status : 'Active'}</p>
            </div>
            <div className='admin-prod-action'>
              <Link to={'/admin-page/edit-product'}>
                <BiEdit
                  className='admin-prod-edit-icon'
                  onClick={() => {
                    appValue.handleGetProd(element);
                  }}
                />
              </Link>
              <FiDelete
                className='admin-prod-delete-icon'
                onClick={() =>
                  productActions.deleteProduct(element._id, navigate)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProdMng;
