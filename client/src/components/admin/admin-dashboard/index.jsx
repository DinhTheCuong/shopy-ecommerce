import './style.css';
import { Link } from 'react-router-dom';
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
    </div>
  );
};

export default AdminDashboard;
