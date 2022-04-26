import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateBook.css";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, description };
    fetch(`http://localhost:8000/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => {
      setIsloading(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book title:</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Book author:</label>
        <input
          type="text"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <label>Book description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {!isLoading && <button>Add Book</button>}
        {isLoading && (
          <button style={{ pointerEvents: "none" }}>Adding Book</button>
        )}
      </form>
    </div>
  );
};

export default CreateBook;
