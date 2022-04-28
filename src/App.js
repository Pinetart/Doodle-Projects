import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard/Dashboard";
import CreateRequest from "./Pages/create/CreateRequest";
import Navbar from "./Components/Navbar";
import Request from "./Pages/request/Request";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/createbook">
              <CreateRequest />
            </Route>
            <Route path="/requests/:id">
              <Request />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
