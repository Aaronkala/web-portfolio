import React from 'react';

import Layout from '../../layout';
import Content from './content';
import Sidebar from '../common/sidebar';
import analytics from '../../utils/analytics';

export default class Home extends React.Component {
  componentDidMount() {
    analytics({ event: 'spa-pageview' });
  }
  render() {
    return <Layout left={<Sidebar />} right={<Content />} />;
  }
}
