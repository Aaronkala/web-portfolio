import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
  render() {
    return (
      <Nav>
        <Wrapper>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
        </Wrapper>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  position: relative;
  height: 0;
  z-index: 1;
  @media (max-width: 1200px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: -100%;
  margin-bottom: 2em;
  @media (max-width: 1200px) {
    background-color: white;
    position: relative;
    margin: 1em auto;
    padding: 1em 5em;
    width: max-content;
  }
`;

const NavItem = styled(Link)`
  width: max-content;
  display: inline;
  color: ${p => p.theme.color.primary}
  &:not(:last-of-type) {
    margin-right: 1em;
  }
`;
