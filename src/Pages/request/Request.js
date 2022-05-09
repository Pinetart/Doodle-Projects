import "./Request.css";
import useFetch from "../../Hooks/useFetch";
import { useParams, useHistory, Link, NavLink } from "react-router-dom";
import editIcon from "../../assets/Edit-Icon.png";
import deleteIcon from "../../assets/Delete-Icon.png";

const Request = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: request,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/requests/${id}`);

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
          <div className="header">
            <h1>{request.description}</h1>
            <div className="links">
              <NavLink to={`/editrequest/${id}`}>
                <img src={editIcon} alt="add request" />
              </NavLink>
              <img
                src={deleteIcon}
                onClick={(e) => {
                  fetch(`http://localhost:8000/requests/${id}`, {
                    method: "DELETE",
                  }).then(() => {
                    history.push("/");
                  });
                }}
                style={{ cursor: "pointer" }}
                alt="add request"
              />
            </div>
          </div>
          <p>Written by {request.owner}</p>
          <div>{request.description}</div>
          <div>{request.risk}</div>
          <div>{request.impact}</div>
          <div>{request.urgency}</div>
          <div>{request.status}</div>
          <div>{request.description}</div>
          <div>{request.description}</div>
          <div className="actions">
            <button onClick={handleDeny} className="deny">
              Deny request
            </button>
            <button onClick={handleApprove} className="approve">
              Approve request
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default Request;
