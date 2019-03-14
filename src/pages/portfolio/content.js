import React from 'react';

import Contact from '../../components/contact';
import { Container, Scroller, Hr } from '../../components/elements';
import Projects from './projects/index.js';

const Content = ({ filter }) => {
  return (
    <Container>
      <Scroller>
        <Projects filter={filter} />
        <Hr />
        <Contact />
      </Scroller>
    </Container>
  );
};

export default Content;
