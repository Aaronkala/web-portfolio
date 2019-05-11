import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// The navigation items that will be in all navs
// TODO: this should come as a prop
export const NavItems = () => {
  return [
    <NavItem to="/" key="link-home">
      Home
    </NavItem>,
    <NavItem to="/portfolio" key="link-portfolio">
      Portfolio
    </NavItem>,
  ];
};

const NavItem = styled(Link)`
  width: max-content;
  display: inline;
  color: ${p => p.theme.colors.primary};
  &:not(:last-of-type) {
    margin-right: 1em;
  }
`;

// -------------------------
// CENTERED
const Centered = () => {
  return (
    <Nav>
      <Wrapper>{NavItems()}</Wrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const Wrapper = styled.div`
  padding: 1em 2em;
  width: max-content;
  margin: 5px auto;
  background-color: white;
`;

// -------------------------
// BAR
const Bar = () => {
  return (
    <TopBar>
      <Container>{NavItems()}</Container>
    </TopBar>
  );
};

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
  @media (${p => p.theme.mediaQueries.xl}) {
    max-width: 800px;
  }
  @media (${p => p.theme.mediaQueries.xl}) {
    padding: 0 15px;
  }
`;

// -------------------------
// HOVERING
const Hovering = () => (
  <HoveringContainer>
    <HoveringNav>{NavItems()}</HoveringNav>
  </HoveringContainer>
);

const HoveringContainer = styled.nav`
  position: relative;
`;

const HoveringNav = styled.div`
  position: absolute;
  bottom: -100%;
  margin: 1em auto;
`;

const NAVS = {
  bar: Bar, // top left nav bar
  centered: Centered, // fixed top and centered
  hovering: Hovering, // outside parent container
};

export default ({ type }) => {
  console.log(type);
  console.log(NAVS[type]);
  if (NAVS[type] !== undefined) {
    return React.createElement(NAVS[type]);
  }
  console.error('Type not in list of possible nav elements');
  return null;
};
