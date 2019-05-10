import React from 'react';
import styled from 'styled-components';

import Skills from './skills';
import Contact from '../../components/contact';
import Intro from './intro';
import Experience from './experience';
import { Scroller, Container } from '../../components/elements';

export default class Content extends React.Component {
  render() {
    return (
      <Container>
        <Scroller>
          <Paddington>
            <Intro />
            <Skills />
            <Experience />
            <Contact />
          </Paddington>
        </Scroller>
      </Container>
    );
  }
}

const Paddington = styled.div`
  padding: 2em 1em;
  @media (${p => p.theme.mediaQueries.sm}) {
    padding: 2em 2em;
  }
  @media (${p => p.theme.mediaQueries.md}) {
    padding: 2em 3em;
  }
  & > *:not(:last-child) {
    margin-bottom: 6em;
  }
`;
