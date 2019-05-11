import React from 'react';

import Skills from './skills';
import Contact from '../../components/contact/contact';
import Intro from './intro';
import Experience from './experience';
import Container from '../../components/container/container';

export default class Content extends React.Component {
  render() {
    return (
      <Container>
        <Intro />
        <Skills />
        <Experience />
        <Contact />
      </Container>
    );
  }
}
