import React from 'react';
import styled from 'styled-components';
import { Box, Image } from 'rebass';
import { position, display } from 'styled-system';

import SplitLayout from '../../components/splitLayout/splitLayout';
import Container from '../../components/container/container';
import Content from './content';
import analytics from '../../utils/analytics';
import Head from '../../components/head/head';
import Nav from '../../components/navigation/navigation';
import me from '../../static/aaron.jpg';

const PositionBox = styled(Box)`
  ${position};
  ${display};
`;

const CustomImage = styled(Image)`
  max-width: 300px;
  max-height: 400px;
  object-fit: cover;
`;

export default class Home extends React.Component {
  componentDidMount() {
    analytics({ event: 'spa-pageview' });
  }
  render() {
    return (
      <Box mt={{ xs: 3, md: 7 }} mb={7}>
        <Head title="Hakala - Home" name="About me" />
        <Nav type="centered" display={{ xs: 'initial', md: 'none' }} />
        <Container>
          <SplitLayout
            left={
              <PositionBox position={{ xs: 'initial', md: 'fixed' }}>
                <Nav type="hovering" display={{ xs: 'none', md: 'flex' }} />
                {/* TODO: fix profile image width and height */}
                <PositionBox display="flex">
                  <CustomImage src={me} mx="auto" mt={{ xs: 4, md: 0 }} />
                </PositionBox>
              </PositionBox>
            }
            right={<Content />}
          />
        </Container>
      </Box>
    );
  }
}
