import React from 'react';

import Content from './content';
import Nav from '../../components/navigation/navigation';
import Head from '../../components/head/head';
import analytics from '../../utils/analytics';
import Container from '../../components/container/container';

const Portfolio = props => {
  analytics({ event: 'spa-pageview' });
  return (
    <Container mt={6} mb={7}>
      <Head title="Hakala - Portfolio" name="Web Portfolio" />
      <Nav type="bar" />
      <Content filter={props.match.params.filter} />
    </Container>
  );
};

export default Portfolio;
