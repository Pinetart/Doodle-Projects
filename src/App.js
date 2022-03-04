import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import CreateBook from "./Components/Pages/CreateBook";
import Navbar from "./Components/UI/Navbar";
import IndividualBook from "./Components/Pages/IndividualBook";

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
