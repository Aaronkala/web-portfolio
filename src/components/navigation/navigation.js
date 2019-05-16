import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { display } from 'styled-system';

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
const Centered = props => {
  return (
    <Nav {...props}>
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
  ${display};
`;

const Wrapper = styled.div`
  padding: 1em 2em;
  width: max-content;
  margin: 5px auto;
  background-color: white;
`;

// -------------------------
// BAR
const Bar = props => {
  return (
    <TopBar {...props}>
      <Container>{NavItems()}</Container>
    </TopBar>
  );
};

const TopBar = styled.div`
  top: 0;
  height: 4em;
  position: fixed;
  background-color: white;
  width: 100%;
  display: flex;
  ${display};
`;

const Container = styled.div`
  max-width: ${p => p.theme.breakpoints.md};
  width: 100%;
  align-items: center;
  display: flex;
  @media (${p => p.theme.mediaQueries.md}) {
    max-width: 800px;
  }
`;

// -------------------------
// HOVERING
const Hovering = props => (
  <HoveringContainer {...props}>
    <HoveringNav>{NavItems()}</HoveringNav>
  </HoveringContainer>
);

const HoveringContainer = styled.nav`
  position: relative;
  ${display};
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

export default props => {
  if (NAVS[props.type] !== undefined) {
    return React.createElement(NAVS[props.type], props);
  }
  return null;
};
