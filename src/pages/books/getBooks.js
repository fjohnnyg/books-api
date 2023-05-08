import { useEffect, useState } from 'react';
import { getBooks } from '../books';


function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks()
      .then(batatas => setBooks(batatas.data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.year}</p>
          <p>{book.description}</p>
          <img src={book.book_cover} alt={book.title} />
        </div>
      ))}
    </div>
  );
}

export default BookList;
