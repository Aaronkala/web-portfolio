import React from 'react';
import styled from 'styled-components';

import Contact from '../../components/contact';
import { Container, Scroller, Hr } from '../../components/elements';
import Projects from './projects/index.js';

const Content = ({ filter }) => {
  return (
    <Container>
      <Scroller>
        <Spacer>
          <Projects filter={filter} />
          <Hr />
          <Contact />
        </Spacer>
      </Scroller>
    </Container>
  );
};

const Spacer = styled.section`
  margin-top: 8em;
  @media (max-width: ${p => p.theme.breakpoints.xl}) {
    padding: 0 15px;
  }
`;

export default Content;
