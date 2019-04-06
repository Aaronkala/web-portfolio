import React from 'react';

import Layout from '../../layout';
import Content from './content';
import Sidebar from '../common/sidebar';
import analytics from '../../utils/analytics';
import Head from '../../components/head';

export default class Home extends React.Component {
  componentDidMount() {
    analytics({ event: 'spa-pageview' });
  }
  render() {
    return (
      <React.Fragment>
        <Head title="Hakala - Home" name="About me" />
        <Layout left={<Sidebar />} right={<Content />} />
      </React.Fragment>
    );
  }
}
