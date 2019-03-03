import React from 'react';

import Layout from '../../layout';
import Sidebar from '../common/sidebar';
import Content from './content';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    const { filter } = this.props.match.params;
    this.state = {
      filter: filter ? filter : undefined,
    };
  }
  render() {
    return <Layout left={<Sidebar />} right={<Content />} />;
  }
}
