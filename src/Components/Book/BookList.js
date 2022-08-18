import PropTypes from 'prop-types';
import './BookList.css';

const BookList = (props) => {
  const { title, author } = props;
  return (
    <li className='list'>
      <h2>{title}</h2>
      <p>{author}</p>
      <button>Remove</button>
    </li>
  );
};

BookList.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookList;
