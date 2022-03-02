import "./Book.css";

const Book = ({ books, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
          <p
            style={{
              marginTop: "10px",
            }}
          >
            Description: {book.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Book;
