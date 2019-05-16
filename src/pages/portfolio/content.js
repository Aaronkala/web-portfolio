import React from 'react';

import Contact from '../../components/contact/contact';
import Hr from '../../components/hr/hr';
import Projects from './projects/index.js';

const Content = ({ filter }) => {
  return (
    <div>
      <Projects filter={filter} />
      <Hr />
      <Contact />
    </div>
  );
};

export default Content;
