import { useState } from "react";
import Requestlist from "../../Components/RequestList";
import useFetch from "../../Hooks/useFetch";
import FormFilter from "./FormFilter";
import addIcon from "../../assets/Add-Icon.png";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const {
    data: requests,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/requests");

  const [filter, setFilter] = useState("All Requests");

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredRequests = requests
    ? requests.filter((request) => {
        switch (filter) {
          case "all":
            return true;
          case "open":
          case "pending":
          case "solved":
          case "closed":
            return request.status === filter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2>All Requests</h2>
      {isLoading && <div style={{ marginTop: "10px" }}>Please Wait...</div>}
      {error && <div style={{ marginTop: "10px" }}>{error}</div>}
      {requests && (
        <div className="filters">
          <FormFilter changeFilter={changeFilter} />
          <NavLink to="/create">
            <img src={addIcon} alt="add request" />
          </NavLink>
        </div>
      )}
      {filteredRequests && <Requestlist requests={filteredRequests} />}
    </div>
  );
};

export default Dashboard;
