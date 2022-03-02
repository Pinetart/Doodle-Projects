import "./Book.css";

const Book = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Book;
