import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import "./CreateRequest.css";

const CreateRequest = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const {
    data: requests,
    error,
    isLoading: loadingMessage,
  } = useFetch("http://localhost:8000/requests");

  const history = useHistory();
  const users = requests ? requests.map((request) => request.owner) : null;
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    const request = { title, author, description };
    fetch(`http://localhost:8000/requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    }).then(() => {
      setIsloading(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h1>Change Request Submission Form</h1>
      {loadingMessage && (
        <div style={{ marginTop: "10px" }}>Please Wait...</div>
      )}
      {error && <div style={{ marginTop: "10px" }}>{error}</div>}
      {requests && (
        <form onSubmit={handleSubmit}>
          <div className="grid-container">
            <div className="grid-item">
              <label>Book title:</label>
              <input
                type="text"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="grid-item">
              <label>Book author:</label>
              <input
                type="text"
                value={author}
                required
                onChange={(e) => setAuthor(e.target.value)}
              ></input>
            </div>
            <div className="grid-item">
              <label>Book description:</label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
            <div className="grid-item">6</div>
            <div className="grid-item">7</div>
            <div className="grid-item">8</div>
            <div className="grid-item">9</div>
          </div>
          <div className="buttons">
            <div className="back">
              <Link to="/">Back</Link>
            </div>
            {!isLoading && <button>Add Request</button>}
            {isLoading && (
              <button style={{ pointerEvents: "none" }}>
                Adding Request..
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateRequest;
