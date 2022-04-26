import { useState } from "react";
import Requestlist from "../../Components/RequestList";
import useFetch from "../../Hooks/useFetch";
import FormFilter from "./FormFilter";

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
            return request.category === filter;
          case "pending":
            return request.category === filter;
          case "solved":
            return request.category === filter;
          case "closed":
            return request.category === filter;
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
      {requests && <FormFilter changeFilter={changeFilter} />}
      {filteredRequests && <Requestlist requests={filteredRequests} />}
    </div>
  );
};

export default Dashboard;
