import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Block = ({ children }) => {
  // builds a custom link :sweat-smile:
  const link = `portfolio/${encodeURI(children.toLowerCase())}`;
  return <Button to={link}>{children}</Button>;
};

const Button = styled(Link)`
  padding: 0.5em 1em;
  background-color: ${p => p.theme.color.primary};
  width: max-content;
  color: white;
  display: inline;
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
    transform: scale(1.3);
  }
`;

export default Block;
