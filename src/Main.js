import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";
import Invoices from "./Invoice/Invoice";

export default function Main() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/toallinv">
            <Invoices />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
