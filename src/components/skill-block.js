import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Block = ({ children, skill = null, active }) => {
  // builds a custom link :sweat-smile:
  let name = skill || children;
  const link = `/portfolio/${encodeURI(name.toLowerCase().replace(' ', '-'))}`;
  return (
    <Button to={link} active={active}>
      {children}
    </Button>
  );
};

const Button = styled(Link)`
  display: inline-block;
  padding: 0.5em 1em;
  background-color: ${p =>
    p.active ? p.theme.color.secondary : p.theme.color.primary};
  width: max-content;
  color: white;
  margin-bottom: 0.7em;
  border: none;
  outline: none;
  font-size: 1em;
  &:not(:last-of-type) {
    margin-right: 1em;
  }
  box-shadow: 4px 4px 0px 0px ${p => p.theme.color.secondary};
  transition: all 0.1s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 4px 4px 0px 0px ${p => p.theme.color.primary};
    background-color: ${p => p.theme.color.secondary};
    transform: ${p => (p.active ? '' : 'scale(1.3)')};
  }
`;

export default Block;
