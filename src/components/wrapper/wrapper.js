import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ThemeWrapper from '../../styles/themeWrapper';

const history = createBrowserHistory();

export default ({ children }) => (
  <ThemeWrapper>
    <Router history={history}>{children}</Router>
  </ThemeWrapper>
);
