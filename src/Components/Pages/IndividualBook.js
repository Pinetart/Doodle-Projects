import "./IndividualBook.css";
import useFetch from "../Fetchers/useFetch";
import { useParams, useHistory } from "react-router-dom";

const IndividualBook = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: book,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/books/${id}`);

  const handleClick = (e) => {
    fetch(`http://localhost:8000/books/${id}`, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };
  return (
    <div className="book-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {book && (
        <article>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
          <div>{book.description}</div>
          <button onClick={handleClick}>Delete Book</button>
        </article>
      )}
    </div>
  );
};

export default IndividualBook;
