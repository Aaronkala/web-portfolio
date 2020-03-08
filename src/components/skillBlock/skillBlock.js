import React from "react";
import { Link } from "gatsby";
import { Button } from "rebass";

const Block = props => {
  // builds a custom link :sweat-smile:
  let name = props.skill || props.children;
  const link = `/portfolio/${encodeURI(name.toLowerCase().replace(" ", "-"))}`;
  return (
    <Button as={Link} to={link} {...props}>
      {props.children}
    </Button>
  );
};

export default Block;
