import styled from 'styled-components';

const Title = styled.h1`
  width: max-content;
`;

const Subtitle = styled.h2`
  font-size: 1.2em;
`;

const Hr = styled.hr`
  width: 50px;
  display: block;
  margin: 30px 0px;
  border: none;
  border-bottom: 1px solid black;
`;

const Scroller = styled.div`
  box-sizing: border-box;
  padding: 2em 1em;
  @media screen and (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: 2em 2em;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.md}) {
    padding: 2em 3em;
  }
  h1:first-of-type {
    margin-top: 0;
  }
  margin-bottom: 50%;
  & > * {
    display: inline-block;
    margin-top: 2em;
    margin-bottom: 2.5em;
  }
`;

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

export { Title, Subtitle, Hr, Scroller, Picture };
