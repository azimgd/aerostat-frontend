import React from "react";
import HomePage from "./homepage.jsx";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, Link, Redirect } from "react-router";
import { App } from "neal-react";
import createHashHistory from "history/lib/createHashHistory";
import createBrowserHistory from "history/lib/createBrowserHistory";

let history = createBrowserHistory();
if (window.location.protocol === "file:") {
  history = createHashHistory({ queryKey: false });
}

class SampleApp extends React.Component {
  render() {
    return (
      <App
        googleAnalyticsKey="key"
        history={history}>
        {this.props.children}
      </App>
    );
  }
}

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={SampleApp} history={history}>
      <IndexRoute name="home" component={HomePage}/>
      <Route path="*" component={HomePage}/>
    </Route>
  </Router>
), document.getElementById("main"));
