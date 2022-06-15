import "./Dashboard.css";
import addIcon from "../../assets/Add-Icon.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FormFilter from "./FormFilter";
import { NavLink } from "react-router-dom";
import RequestList from "../../components/requestlist/RequestList";
import { useSelector } from "react-redux";
import { fetchActions } from "../../context/fetchSlice";
import { Requests } from "../../interfaces/interfaces";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [requests, setRequests] = useState<Requests>(null);
  const data = useSelector<Requests>((state) => state.fetch.data);
  const error = useSelector<Requests>((state) => state.fetch.error);
  const isLoading = useSelector<Requests>((state) => state.fetch.isLoading);

  useEffect(() => {
    dispatch(fetchActions.create(null));
    setRequests(data);
  }, [data]);

  const [filter, setFilter] = useState("all");

  const changeFilter = (newFilter: string) => {
    setFilter(newFilter);
  };
  const updateDashboard = (array: Requests) => {
    setRequests(array);
  };

  const filteredRequests = requests
    ? requests.filter((request: Requests) => {
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
      {error && <div style={{ marginTop: "10px" }}>Failed to fetch data</div>}
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
