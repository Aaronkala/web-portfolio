import React from 'react';
import { Image } from 'rebass';

import SplitLayout from '../../components/splitLayout/splitLayout';
import Container from '../../components/container/container';
import Content from './content';
import analytics from '../../utils/analytics';
import Head from '../../components/head/head';
import Nav from '../../components/navigation/navigation';
import me from '../../static/aaron.jpg';

export default class Home extends React.Component {
  componentDidMount() {
    analytics({ event: 'spa-pageview' });
  }
  render() {
    return (
      <React.Fragment>
        <Head title="Hakala - Home" name="About me" />
        <Container>
          <div>
            <SplitLayout
              left={
                <React.Fragment>
                  <Nav type="centered" />
                  <Nav type="hovering" />
                  <Image src={me} />
                </React.Fragment>
              }
              right={<Content />}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
