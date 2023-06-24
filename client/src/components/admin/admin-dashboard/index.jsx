import './style.css';
import { Link } from 'react-router-dom';
import noData from '../../../assets/images/placeholder/no-data.png';
const AdminDashboard = () => {
  return (
    <div className='admin-dashboard'>
      <p className='prod-mng-title'>Dashboard</p>
      <Link
        to='/admin-page/add-product'
        className='add-prod-btn'
      >
        Add Product
      </Link>
      <div className='no-order'>
        <img
          src={noData}
          alt=''
          className='no-order-images'
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
