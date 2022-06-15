import "./Dashboard.css";
import addIcon from "../../assets/Add-Icon.png";
import { useEffect, useState } from "react";
import FormFilter from "./FormFilter";
import { NavLink } from "react-router-dom";
import RequestList from "../../components/requestlist/RequestList";
import useFetch from "../../hooks/useFetch";
import { Requests } from "../../interfaces/interfaces";

const Dashboard = () => {
  const { data, error, isLoading } = useFetch({
    url: "http://localhost:8000/requests",
  });
  const [filter, setFilter] = useState("all");
  const [requests, setRequests] = useState<Requests | null>(null);
  useEffect(() => {
    setRequests(data);
  }, [data]);

  const changeFilter = (newFilter: string) => {
    setFilter(newFilter);
  };
  const updateDashboard = (array: Requests) => {
    setRequests(array);
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
          <FormFilter changeFilter={changeFilter} requests={requests} />
          <NavLink to="/create">
            <img src={addIcon} alt="add request" />
          </NavLink>
        </div>
      )}
      {filteredRequests && requests && (
        <RequestList
          requests={filteredRequests
            .slice()
            .sort(
              (a: Requests, b: Requests) =>
                new Date(b.timecreated).valueOf() -
                new Date(a.timecreated).valueOf()
            )}
          allRequest={requests}
          updateDashboard={updateDashboard}
        />
      )}
    </div>
  );
};

export default Dashboard;
