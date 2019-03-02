import React from "react";
import styled from "styled-components";

import Skills from "./skills";
import Contact from "./contact";
import Intro from "./intro";
import Experience from "./experience";

export default class Content extends React.Component {
  render() {
    return (
      <Container>
        <Scroller>
          <Intro />
          <Skills />
          <Experience />
          <Contact />
        </Scroller>
      </Container>
    );
  }
}

const Container = styled.div`
  box-sizing: border-box;
  height: 50%;
`;

const Scroller = styled.div`
  box-sizing: border-box;
  padding: 2em 1em;
  @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: 2em 2em;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    padding: 2em 3em;
  }
  h1:first-of-type {
    margin-top: 0;
  }
  margin-bottom: 50%;
  & > * {
    display: inline-block;
    margin-top: 2em;
    margin-bottom: 2.5em;
  }
`;
