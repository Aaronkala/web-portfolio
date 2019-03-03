import React from "react";
import styled from "styled-components";
import Block from "../../components/skill-block";

export default class Skills extends React.Component {
  render() {
    return (
      <div>
        <h2>Expertise</h2>
        <h3>Programming</h3>
        <List>
          <Block>Javascript</Block>
          <Block>ReactJS</Block>
          <Block>Git</Block>
          <Block>NodeJS</Block>
          <Block>GraphQL</Block>
          <Block>Webpack</Block>
          <Block>MobX</Block>
          <Block>Docker</Block>
          <Block>SASS</Block>
          <Block>Styled-components</Block>
        </List>
        <h3>Design</h3>
        <List>
          <Block>UX Design</Block>
          <Block>Photoshop</Block>
          <Block>Illustrator</Block>
          <Block>InVision Studio</Block>
          <Block>Usability</Block>
          <Block>Accessibility</Block>
        </List>
      </div>
    );
  }
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
