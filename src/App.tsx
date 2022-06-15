import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateRequest from "./pages/create/CreateRequest";
import Request from "./pages/request/Request";
import Edit from "./pages/edit/Edit";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/create" component={CreateRequest} />
            <Route path="/requests/:id" component={Request} />
            <Route path="/editrequest/:id" component={Edit} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
