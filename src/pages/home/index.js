import React from 'react';
import { Box, Image } from 'rebass';

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
      <Box mt={{ xs: 3, lg: 7 }}>
        <Head title="Hakala - Home" name="About me" />
        <Nav type="centered" display={{ xs: 'initial', lg: 'none' }} />
        <Container>
          <SplitLayout
            left={
              <React.Fragment>
                <Nav type="hovering" display={{ xs: 'none', lg: 'flex' }} />
                {/* TODO: fix profile image width and height */}
                <Image src={me} mx="auto" />
              </React.Fragment>
            }
            right={<Content />}
          />
        </Container>
      </Box>
    );
  }
}
