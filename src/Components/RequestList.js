import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./RequestList.css";

const Requestlist = ({ requests }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {requests.map((request) => (
        <div className="request-preview" key={request.id}>
          <Link to={`/requests/${request.id}`}>
            <h2>{request.title}</h2>
            <p>Written by {request.author}</p>
          </Link>
          {!isLoading && (
            <button
              onClick={(e) => {
                fetch(`http://localhost:8000/requests/${request.id}`, {
                  method: "DELETE",
                }).then(() => {
                  history.go(0);
                  setIsLoading(false);
                });
              }}
            >
              Delete Request
            </button>
          )}
          {isLoading && (
            <button style={{ pointerEvents: "none" }}>
              Deleting Request..
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Requestlist;
