import { useState } from "react";
import { Link } from "react-router-dom";
import "./RequestList.css";
import editIcon from "../assets/Edit-Icon.png";
import deleteIcon from "../assets/Delete-Icon.png";
import loadingIcon from "../assets/Loading-Icon.png";

const Requestlist = ({ requests, updateDashboard, allRequest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const headers = ["Requestor", "Title", "Status", "Priority", "Date"];

  const handleClick = (id) => {
    updateDashboard(allRequest.filter((request) => request.id !== id));
  };

  return (
    <table className="tablelist">
      <tr>
        <th>Requestor</th>
        <th>Title</th>
        <th>Status</th>
        <th>Priority</th>
        <th>Date</th>
        <th></th>
      </tr>
      {requests.map((request) => (
        <tr>
          <td>
            <p style={{ fontWeight: "500" }}>{request.requestor}</p>
            <p style={{ fontWeight: "300", color: "#9B9B9B" }}>
              {request.requestoremail}
            </p>
          </td>
          <td>{request.title}</td>
          <td>{request.status}</td>
          <td>{request.urgency}</td>
          <td>{request.date}</td>
          <td>
            <img src={editIcon} alt="edit request" />
            {!isLoading && (
              <img
                src={deleteIcon}
                onClick={(e) => {
                  setIsLoading(true);
                  fetch(`http://localhost:8000/requests/${request.id}`, {
                    method: "DELETE",
                  }).then(() => {
                    handleClick(request.id);
                    setIsLoading(false);
                  });
                }}
                alt="add request"
              />
            )}
            {isLoading && (
              <img src={loadingIcon} className="loading" alt="loading" />
            )}
          </td>
        </tr>
      ))}
    </table>
    // <div>
    //   {requests.map((request) => (
    //     <div className="request-preview" key={request.id}>
    //       <Link to={`/requests/${request.id}`}>
    //         <h2>{request.description}</h2>
    //         <p>Written by {request.author}</p>
    //       </Link>
    //       <div className="actions">
    //         <img src={editIcon} alt="edit request" />
    //         {!isLoading && (
    //           <img
    //             src={deleteIcon}
    //             onClick={(e) => {
    //               setIsLoading(true);
    //               fetch(`http://localhost:8000/requests/${request.id}`, {
    //                 method: "DELETE",
    //               }).then(() => {
    //                 handleClick(request.id);
    //                 setIsLoading(false);
    //               });
    //             }}
    //             alt="add request"
    //           />
    //         )}
    //         {isLoading && (
    //           <img src={loadingIcon} className="loading" alt="loading" />
    //         )}
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Requestlist;
