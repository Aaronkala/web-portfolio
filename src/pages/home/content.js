import React from 'react';

import Skills from './skills';
import Contact from '../../components/contact/contact';
import Intro from './intro';
import Experience from './experience';

export default class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Intro mb={6} />
        <Skills mb={6} />
        <Experience mb={6} />
        <Contact />
      </React.Fragment>
    );
  }
}
