import React from "react";
import styled from "styled-components";

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        {/* <TopGradient /> */}
        <CardLeft>{this.props.left}</CardLeft>
        <CardRight>{this.props.right}</CardRight>
        {/* <BottomGradient /> */}
      </Container>
    );
  }
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono");
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  font-family: "IBM Plex Mono", monospace;
  @media (max-width: 1200px) {
    max-width: 800px;
    display: block;
  }
`;

const BottomGradient = styled.div`
  height: 25%;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: linear-gradient(
    transparent,
    rgba(255, 255, 255, 0.5) 30%,
    white 90%
  );
  @media (max-width: 1200px) {
    display: none;
  }
`;

const TopGradient = styled.div`
  height: 25%;
  width: 100%;
  position: fixed;
  background: linear-gradient(
    white 10%,
    rgba(255, 255, 255, 0.5) 70%,
    transparent
  );
  top: 0;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const CardLeft = styled.div`
  height: 50%;
  width: 30%;
  display: flex;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: 44%;
    margin-top: 5em;
  }
`;
const CardRight = styled.div`
  display: flex;
  width: 70%;
  height: 100vh;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1200px) {
    height: auto;
    width: 100%;
  }
`;
