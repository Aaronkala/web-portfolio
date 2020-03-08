import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../config/styles/theme";
import GlobalStyles from "../config/styles/globalStyles";
import "../tailwind.css";

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      {children}
    </React.Fragment>
  </ThemeProvider>
);
