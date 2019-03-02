import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import theme from "./styles/theme";
import "./styles/globalStyles";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/:filter" component={Portfolio} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
