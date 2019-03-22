import React from "react";
import styled from "styled-components";

export default class Contact extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact</h2>
        <p>
          <Link href="https://github.com/aaronkala" target="blank">Github</Link>
          <Link href="https://linkedin.com/in/aaron-hakala" target="blank">Linkedin</Link>
        </p>
        <p>
          <Link href="mailto:aaron.hakala@gmail.com" target="_top">
            aaron.hakala@gmail.com
          </Link>
        </p>
        <p>
          <Link href="tel:+358456739439">+358-456-739-439</Link>
        </p>
      </section>
    );
  }
}

const Link = styled.a`
  color: white;
  background: ${p => p.theme.color.alert};
  &:not(:first-of-type) {
    margin-left: 15px;
  }
`;
