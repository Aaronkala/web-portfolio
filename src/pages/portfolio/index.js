import React from 'react';

import Layout from '../../layout';
import Content from './content';
import { NavBar } from '../../components/navigation';
import analytics from '../../utils/analytics';

const Portfolio = props => {
  analytics({ event: 'spa-pageview' });
  return (
    <React.Fragment>
      <NavBar />
      <Layout>
        <Content filter={props.match.params.filter} />
      </Layout>
    </React.Fragment>
  );
};

export default Portfolio;
