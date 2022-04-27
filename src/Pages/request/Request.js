import "./Request.css";
import useFetch from "../../Hooks/useFetch";
import { useParams, useHistory } from "react-router-dom";

const Request = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: request,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/requests/${id}`);

  const handleClick = (e) => {
    fetch(`http://localhost:8000/requests/${id}`, { method: "DELETE" }).then(
      () => {
        history.push("/");
      }
    );
  };
  return (
    <div className="request-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {request && (
        <article>
          <h2>{request.title}</h2>
          <p>Written by {request.owner}</p>
          <div>{request.description}</div>
          <div>{request.risk}</div>
          <div>{request.impact}</div>
          <div>{request.urgency}</div>
          <div>{request.status}</div>
          <div>{request.description}</div>
          <div>{request.description}</div>
          <button onClick={handleClick}>Delete request</button>
        </article>
      )}
    </div>
  );
};

export default Request;
