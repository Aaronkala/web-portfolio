import React from 'react';
import styled from 'styled-components';
import { Only } from 'atomic-layout';

import SplitLayout from '../../components/splitLayout/splitLayout';
import Container from '../../components/container';
import Content from './content';
import analytics from '../../utils/analytics';
import Head from '../../components/head';
import Nav from '../../components/navigation';
import { Picture } from '../../components/elements';
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
          <FrontPageWrapper>
            <SplitLayout
              left={
                <React.Fragment>
                  <Only to="lg">
                    <Nav type="centered" />
                  </Only>
                  <Only from="lg">
                    <Nav type="hovering" />
                  </Only>
                  <Picture src={me} />
                </React.Fragment>
              }
              right={<Content />}
            />
          </FrontPageWrapper>
        </Container>
      </React.Fragment>
    );
  }
}

const FrontPageWrapper = styled.div`
  margin-top: 20%;
`;
