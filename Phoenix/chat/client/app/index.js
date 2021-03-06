import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import "./styles/reset.css"
import App from "./app.jsx";
import Home from "./components/Home/home.jsx";
import Settings from "./components/Settings/settings.jsx";

const ChatRouter = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="settings" component={Settings} />
      </Route>
    </Router>
  );
}

ReactDOM.render(
  <ChatRouter />,
  document.getElementById("root")
)
