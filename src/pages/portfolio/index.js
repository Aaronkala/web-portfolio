import React from 'react';

import Layout from '../../layout';
import Content from './content';
import { NavBar } from '../../components/navigation';

const Portfolio = props => {
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
