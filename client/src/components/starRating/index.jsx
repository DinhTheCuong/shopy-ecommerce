import './style.css';

const StarRating = ({ rating }) => {
  return (
    <div className='star-rating'>
      {[...Array(rating)].map(() => {
        return <span className='star'>&#9733;</span>;
      })}
    </div>
  );
};

export default StarRating;
