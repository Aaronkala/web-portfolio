import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItems = () => {
  return [
    <NavItem to="/">Home</NavItem>,
    <NavItem to="/portfolio">Portfolio</NavItem>,
  ];
};

const SpecialNavigation = () => {
  return (
    <Nav>
      <Wrapper>{NavItems()}</Wrapper>
    </Nav>
  );
};

export const NavBar = () => {
  return (
    <TopBar>
      <Container>{NavItems()}</Container>
    </TopBar>
  );
};

const Nav = styled.nav`
  position: relative;
  height: 0;
  z-index: 1;
  @media (max-width: ${p => p.theme.breakpoints.xl}) {
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
  @media (max-width: ${p => p.theme.breakpoints.xl}) {
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
  color: ${p => p.theme.color.primary};
  &:not(:last-of-type) {
    margin-right: 1em;
  }
`;

const TopBar = styled.div`
  height: 4em;
  position: fixed;
  margin-bottom: 3em;
  background-color: white;
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.breakpoints.xl};
  width: 100%;
  align-items: center;
  display: flex;
  @media (max-width: ${p => p.theme.breakpoints.xl}) {
    max-width: 800px;
  }
  @media (max-width: ${p => p.theme.breakpoints.xl}) {
    padding: 0 15px;
  }
`;

export default SpecialNavigation;
