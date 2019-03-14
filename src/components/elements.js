import styled from 'styled-components';

export const Title = styled.h1`
  width: max-content;
`;

export const Subtitle = styled.h2`
  font-size: 1.2em;
`;

export const Container = styled.div`
  box-sizing: border-box;
  height: 50%;
  width: 100%;
`;

export const Hr = styled.hr`
  width: 50px;
  display: block;
  margin: 30px 0px;
  border: none;
  border-bottom: 1px solid black;
`;

export const Scroller = styled.div`
  box-sizing: border-box;
  h1:first-of-type {
    margin-top: 0;
  }
  margin-bottom: 50%;

  & > *:not(:first-child) {
    margin-top: 6em;
  }
`;

export const Picture = styled.div`
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
