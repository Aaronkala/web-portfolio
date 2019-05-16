import styled from 'styled-components';
import { Box } from 'rebass';

const Hr = styled(Box)`
  width: ${p => (p.long ? '100%' : '50px')};
  display: block;
  margin: ${p => (p.big ? '50px' : '30px')} 0px;
  border: none;
  height: 1px;
`;

Hr.defaultProps = {
  as: 'hr',
  bg: 'black',
};

export default Hr;
