import React from "react";
import styled from "styled-components";

export const Event = props => {
  return (
    <Item>
      <TimeDate>
        <p>
          <DateSpan>{props.dateEnd}</DateSpan>
          {props.dateStart ? " - " : null}
          <DateSpan>{props.dateStart}</DateSpan>
        </p>
      </TimeDate>
      <Description>{props.children}</Description>
    </Item>
  );
};

export default class Timeline extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content>{this.props.children}</Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  position: relative;
  margin: 2em 0em;
  &:before {
    content: "";
    height: 100%;
    width: 4px;
    display: block;
    background-color: ${p => p.theme.color.primary};
    position: absolute;
    margin-left: 5px;
    @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
      margin-left: 20%;
    }
  }
`;

const Content = styled.div`
  padding: 2em 0em;
`;

const Item = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
    display: flex;
  }

  &:not(:last-of-type) {
    margin-bottom: 3em;
  }
`;

const TimeDate = styled.div`
  display: flex;
  font-size: 14px;
  position: relative;
  width: 100%;
  padding-left: 3.1em;
  margin-bottom: 0.5em;
  @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
    display: inline-block;
    padding-right: 2em;
    padding-left: 0em;
    text-align: right;
    width: 20%;
  }
  p {
    margin: 0;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${p => p.theme.color.alert};
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin-top: 5px;
    margin-right: -9px;
    @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
      right: 0;
      left: initial;
    }
  }
  &:before {
    content: "<";
    display: inline-block;
    position: absolute;
    font-weight: 700;
    left: 1.5em;
    top: 1px;
    @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
      top: initial;
      right: -2em;
      left: initial;
    }
  }
`;

const Description = styled.div`
  width: 100%;
  padding-left: 3em;
  @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
    width: 80%;
  }
`;

const DateSpan = styled.span`
  display: inline-block;
`;
