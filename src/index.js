import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Wrapper from './components/wrapper/wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:filter" component={Portfolio} />
        </Switch>
      </Wrapper>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
