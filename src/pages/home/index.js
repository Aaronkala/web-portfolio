import React from 'react';

import Layout from '../../layout';
import Content from './content';
import Sidebar from '../common/sidebar';

export default class Home extends React.Component {
  render() {
    return <Layout left={<Sidebar />} right={<Content />} />;
  }
}
