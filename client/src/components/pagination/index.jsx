import './style.css';
import onPage from './onPage';

const Pagination = (props) => {
  return (
    <div className='pagination'>
      <div className='toggle'>
        <input
          type='radio'
          name='toggle'
          id='toggle-1'
          onChange={(event) =>
            onPage(event.target.value, 1, props.setProductsOnPage)
          }
        />
        <label
          className='label-1'
          id='label-1'
          htmlFor='toggle-1'
        >
          1
        </label>
        <input
          type='radio'
          name='toggle'
          id='toggle-2'
          onChange={(event) => onPage(event.target.value, 2)}
        />
        <label
          className='label-2'
          id='label-2'
          htmlFor='toggle-2'
        >
          2
        </label>
        <input
          type='radio'
          name='toggle'
          id='toggle-3'
          onChange={(event) => onPage(event.target.value, 3)}
        />
        <label
          className='label-3'
          id='label-3'
          htmlFor='toggle-3'
        >
          3
        </label>
        <input
          type='radio'
          name='toggle'
          id='toggle-4'
        />
      </div>
    </div>
  );
};

export default Pagination;
