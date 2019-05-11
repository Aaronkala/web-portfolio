import React from 'react';
import { Only } from 'atomic-layout';

import Nav from '../../components/navigation/navigation';
import { Picture } from '../../components/elements';
import me from '../../static/aaron.jpg';

const Sidebar = () => {
  return (
    <React.Fragment>
      <Only from="lg">
        <Nav type="hovering" />
      </Only>
      <Picture src={me} />
    </React.Fragment>
  );
};

export default Sidebar;
