import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBook } from '../../redux/Book/book';
import BookList from '../Book/BookList';
import NewBook from '../NewBook/NewBook';
import './Book.css';

const Book = () => {
  const item = useSelector((state) => state.books);
  const vitor = useDispatch();
  useEffect(() => {
    vitor(loadBook());
  }, []);
  return (
    <ul className="art">
      {item.item.map((data) => (
        <BookList key={data.id} id={data.id} title={data.title} author={data.author} />
      ))}
      <NewBook />
    </ul>
  );
};

export default Book;
