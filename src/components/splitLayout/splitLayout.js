import React from 'react';
import Grid, { GridArea } from '../grid/grid';

const areas = `
"left"
"right"
`;

const areasMd = `"left right"`;

export default ({ gutter, left, right }) => (
  <Grid gridTemplateAreas={{ xs: areas, xl: areasMd }} gutter={gutter || 20}>
    <React.Fragment>
      <GridArea gridArea="left">{left}</GridArea>
      <GridArea gridArea="right">{right}</GridArea>
    </React.Fragment>
  </Grid>
);
