import React from 'react';
import styled from 'styled-components';

const Path = styled.path`
  fill: ${p => p.theme.colors.primary};
`;

const SvgGit = props => (
  <svg width="2em" height="2em" viewBox="0 0 400 400" {...props}>
    <Path
      d="M187.411 2.584c-3.552 1.777-11.197 8.628-24.477 21.933l-19.311 19.349 22.961 22.979 22.961 22.979 7.838-.633c20.031-1.616 34.639 12.983 33.005 32.986l-.638 7.816 21.546 21.564 21.545 21.564 8.614-.537c27.603-1.722 42.985 28.682 24.764 48.949-21.291 23.68-57.334 4.07-51.093-27.799l.818-4.178-20.922-20.878-20.923-20.878V258.655l2.737 1.465c26.349 14.101 11.549 57.927-18.583 55.031-28.916-2.778-37.255-44.825-11.179-56.368l3.004-1.329V146.468l-2.976-1.233c-11.338-4.697-19.242-23.377-14.806-34.993 1.165-3.049.989-3.258-22.109-26.373l-23.282-23.3-60.865 60.838C-1.389 188.806-.007 187.162.01 199.944c.008 6.235.477 8.169 3.053 12.589 4.705 8.074 179.781 182.527 185.971 185.309 5.744 2.582 16.15 2.848 21.705.555 5.391-2.225 184.47-180.972 187.255-186.909 2.705-5.764 2.633-16.256-.152-22.454-2.782-6.19-177.235-181.266-185.309-185.971-7.111-4.144-17.404-4.34-25.122-.479"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgGit;