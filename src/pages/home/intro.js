import React from 'react';
import styled from 'styled-components';
import { Heading, Text, Box } from 'rebass';
import Hr from '../../components/hr/hr';

const P = styled(Text)``;

P.defaultProps = {
  lineHeight: 2,
  fontSize: 2,
  mb: 3,
};

export default class Skills extends React.Component {
  render() {
    return (
      <Box as="section" {...this.props}>
        <Heading fontSize={6} mb={3}>
          Aaron Hakala
        </Heading>
        <Heading fontSize={3}>Software engineer</Heading>
        <Hr />
        <P>Hey, I'm a frontend guy interested in everything tech.</P>
        <P>
          I love playing around with Javascript and I'm super interested in
          fresh Frontend related tech eg. GraphQL, ReasonML & WebAssembly. My
          current favourite frontend stack is React.js, styledcomponent &
          Apollo, but actively looking for better stuff.
        </P>
        <P>
          I have a background around UX Design. I studied digital communications
          in Metropolia and my studies were focused on Design. Designing usable
          software using different designing, prototyping & testing methods.
          Keywords: User-centered design, Human-centered design, usability,
          accessibility, paper prototyping, A-B testing, design of everyday
          things, don't make me think.
        </P>
        <P>
          I wrote my thesis on web accessibility in single page applications,
          due to the increasing demand in creating accessible user-interfaces.
        </P>
        <P>
          In my free time I play around with raspberry pi:s trying to setup
          lightweight web services. Trying to learn docker, programming C, and
          some DevOps stuff to increase my productivity.
        </P>
      </Box>
    );
  }
}
