import React from 'react';

import Navigation from '../../components/navigation';
import { Picture } from '../../components/elements';
import me from '../../static/aaron.jpg';

const Sidebar = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Picture src={me} />
    </React.Fragment>
  );
};

export default Sidebar;
