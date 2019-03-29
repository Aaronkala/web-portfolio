import React from 'react';
import styled from 'styled-components';

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        {this.props.children ? (
          <CardFull>{this.props.children}</CardFull>
        ) : (
          <React.Fragment>
            <CardLeft>{this.props.left}</CardLeft>
            <CardRight>{this.props.right}</CardRight>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-items: center;
  font-family: 'IBM Plex Mono', monospace;
  @media (max-width: 1200px) {
    max-width: 800px;
    display: block;
  }
`;

const CardLeft = styled.div`
  width: 30%;
  max-height: 50%;
  display: flex;
  justify-content: center;
  overflow: initial;
  @media (max-width: 1200px) {
    overflow: hidden;
    width: 100%;
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
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1200px) {
    height: auto;
    width: 100%;
  }
`;

const CardFull = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
