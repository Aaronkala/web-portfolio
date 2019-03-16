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
  width: ${p => (p.long ? '100%' : '50px')};
  display: block;
  margin: ${p => (p.big ? '50px' : '30px')} 0px;
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

const BaseButton = styled.button`
  background-color: transparent;
  display: inline-block;
  padding: 0.5em 1em;
  width: max-content;
  color: black;
  margin-bottom: 0.7em;
  border: none;
  outline: none;
  font-size: 1em;
  &:not(:last-child) {
    margin-right: 1em;
  }
  transition: all 0.1s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: ${p => (p.active ? '' : 'scale(1.2)')};
  }
`;

export const ButtonTransparent = styled(BaseButton)`
  border: 2px solid ${p => p.theme.color.primary};
  &:not(:last-child) {
    margin-right: 1em;
  }
  transition: all 0.1s ease;
  cursor: pointer;
  &:hover,
  &:focus {
  }
`;

export const Button = styled(BaseButton)`
  background-color: ${p =>
    p.active ? p.theme.color.secondary : p.theme.color.primary};
  color: white;
  box-shadow: 4px 4px 0px 0px
    ${p => (p.active ? p.theme.color.primary : p.theme.color.secondary)};
  &:hover,
  &:focus {
    box-shadow: 4px 4px 0px 0px ${p => p.theme.color.primary};
    background-color: ${p => p.theme.color.secondary};
  }
`;
