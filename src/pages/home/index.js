import React from "react";
import styled from "styled-components";

import Layout from "../../layout";
import Content from "./content";
import me from "../../../public/aaron.jpg";
import Navigation from "../../components/navigation";

export default class Home extends React.Component {
  render() {
    return (
      <Layout
        left={
          <React.Fragment>
            <Navigation />
            <Picture src={me} />
          </React.Fragment>
        }
        right={<Content />}
      />
    );
  }
}

const Picture = styled.div`
  background-image: url("${p => p.src}");
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 400px;
  @media (max-width: 1200px) {
    height: 400px;
    max-width: 300px;
    background-position: 50% 30%;
  }
`;
