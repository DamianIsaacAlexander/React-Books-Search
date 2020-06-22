import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSearch from "../src/pages/BookSearch";
import NoMatch from "../src/pages/NoMatch";
import"./App.css";
function App() {
  return (
    <Router>
       <div className="site">
        <Switch>
          <Route exact path={["/", "/books"]}>
            <BookSearch />
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
