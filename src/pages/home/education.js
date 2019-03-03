import React from "react";
import styled from "styled-components";
import Timeline, { Event } from "../../components/timeline";

export default class Career extends React.Component {
  render() {
    return (
      <section>
        <h2>Education</h2>
        <Timeline>
          <Event dateEnd="12 Dec 2018">
            <Title>Digital Communications</Title>
            <SubTitle>Metropolia University of Applied Sciences</SubTitle>
            <p>
              UX design, Design Thinking, User-centered Design, Usability,
              Accessibility, Prototyping, Web Programming
            </p>
          </Event>
          <Event dateEnd="1 Jun 2012">
            <Title>High school</Title>
            <SubTitle>Tikkurilan lukio</SubTitle>
          </Event>
        </Timeline>
      </section>
    );
  }
}

const Title = styled.h3`
  margin: 0;
`;

const SubTitle = styled.h4`
  margin-top: 5px;
`;
