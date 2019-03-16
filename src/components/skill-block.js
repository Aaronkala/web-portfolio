import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from './elements';

const Block = ({ children, skill = null, active }) => {
  // builds a custom link :sweat-smile:
  let name = skill || children;
  const link = `/portfolio/${encodeURI(name.toLowerCase().replace(' ', '-'))}`;
  return (
    <Button as={Link} to={link} active={active}>
      {children}
    </Button>
  );
};

export default Block;
