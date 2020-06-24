import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSearch from "../src/pages/BookSearch";
import NoMatch from "../src/pages/NoMatch";
import Library from "./pages/Library";
import"./App.css";

function App() {
  return (
    <Router>
       <div className="site">
        <Switch>
          <Route exact path={["/", "/search"]}>
            <BookSearch />
          </Route>
          <Route exact path={["/library", "/books"]}>
            <Library />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
