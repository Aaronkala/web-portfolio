import React from "react";
import styled from "styled-components";

import Layout from "../../layout";
import me from "../../../public/aaron.jpg";
import Navigation from "../../components/navigation";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    const { filter } = this.props.match.params;
    this.state = {
      filter: filter ? filter : undefined
    };
  }
  render() {
    return (
      <Layout
        left={
          <React.Fragment>
            <Navigation />
            <Picture src={me} />
          </React.Fragment>
        }
        right={
          <div>
            <button />
          </div>
        }
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
  height: 100%;
  @media (max-width: 1200px) {
    max-width: 300px;
    background-position: 50% 30%;
  }
`;
