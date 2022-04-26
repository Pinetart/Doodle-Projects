import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/requestform/Home";
import CreateBook from "./Pages/CreateBook";
import Navbar from "./Components/Navbar";
import IndividualBook from "./Pages/IndividualBook";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/createbook">
              <CreateBook />
            </Route>
            <Route path="/books/:id">
              <IndividualBook />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
