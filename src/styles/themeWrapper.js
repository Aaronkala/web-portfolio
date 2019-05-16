import React from 'react';
import theme from './theme';
import GlobalStyles from './globalStyles';
import { ThemeProvider } from 'styled-components';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      {children}
    </React.Fragment>
  </ThemeProvider>
);
