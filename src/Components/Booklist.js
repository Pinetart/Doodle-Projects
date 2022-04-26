import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Booklist.css";

const Booklist = ({ books }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <Link to={`/books/${book.id}`}>
            <h2>{book.title}</h2>
            <p>Written by {book.author}</p>
          </Link>
          {!isLoading && (
            <button
              onClick={(e) => {
                fetch(`http://localhost:8000/books/${book.id}`, {
                  method: "DELETE",
                }).then(() => {
                  history.go(0);
                  setIsLoading(false);
                });
              }}
            >
              Delete Book
            </button>
          )}
          {isLoading && (
            <button style={{ pointerEvents: "none" }}>Deleting Book..</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Booklist;
