import "./Request.css";
import useFetch from "../../Hooks/useFetch";
import { useParams, useHistory, Link } from "react-router-dom";

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
  const handleDeny = (e) => {
    fetch(`http://localhost:8000/requests/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...request, status: "closed" }),
    }).then(() => {
      history.push("/");
    });
  };
  const handleApprove = (e) => {
    fetch(`http://localhost:8000/requests/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...request, status: "pending" }),
    }).then(() => {
      history.push("/");
    });
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
          <button onClick={handleDeny}>Deny request</button>
          <Link to={`/editrequest/${id}`}>
            <button>Edit request</button>
          </Link>
          <button onClick={handleApprove}>Approve request</button>
        </article>
      )}
    </div>
  );
};

export default Request;
