import React from 'react';
import styled from 'styled-components';

import Skills from './skills';
import Contact from '../../components/contact';
import Intro from './intro';
import Experience from './experience';
import { Scroller } from '../../components/elements';

export default class Content extends React.Component {
  render() {
    return (
      <Container>
        <Scroller>
          <Intro />
          <Skills />
          <Experience />
          <Contact />
        </Scroller>
      </Container>
    );
  }
}

const Container = styled.div`
  box-sizing: border-box;
  height: 50%;
`;
