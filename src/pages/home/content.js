import React from 'react';

import Skills from './skills';
import Contact from '../../components/contact/contact';
import Intro from './intro';
import Experience from './experience';

export default class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Skills />
        <Experience />
        <Contact />
      </React.Fragment>
    );
  }
}
