import noData from '../../../assets/images/placeholder/no-data.png';
const UsersManager = () => {
  return (
    <div className='user-manager'>
      <p className='prod-mng-title'>Users Manager</p>
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

export default UsersManager;
