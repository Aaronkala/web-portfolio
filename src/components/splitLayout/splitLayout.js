import React from 'react';
import Grid, { GridArea } from '../grid/grid';

const areas = `
"left"
"right"
`;

const areasMd = `"left right"`;

export default ({ gutter, left, right, ...rest }) => (
  <Grid
    gridTemplateAreas={{ xs: areas, md: areasMd }}
    gridGap={5}
    gridTemplateColumns={{ xs: '100%', md: '300px auto' }}
    {...rest}
  >
    <GridArea gridArea="left">{left}</GridArea>
    <GridArea gridArea="right">{right}</GridArea>
  </Grid>
);
