import React from "react";

import Provider from "./src/store/provider";

export const wrapRootElement = ({ element }) => {
  return <Provider>{element}</Provider>;
};
