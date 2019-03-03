import { createGlobalStyle } from 'styled-components';
import theme from './theme';

/* eslint-disable */

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');
  /* CSS RESET */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section { display: block; }
  body { line-height: 1; }
  ol, ul { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after,
  q:before, q:after { content: ''; content: none; }
  table { border-collapse: collapse; border-spacing: 0; }
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    display: block;
    position: relative;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 300;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'IBM Plex Mono', monospace;
    font-weight: 300;
    line-height: 1.45;
  }
  input, button, label, span {
    font-family: 'IBM Plex Mono', monospace;
  }

  ul {
    list-style-type: circle;
    padding-left: 2em;
  }
  
  html {
    font-size: 0.9em;
    @media screen and (min-width: ${theme.breakpoints.md}) {
      font-size: 1em;
    }
  }
  p {
    font-size: 0.9em;
    line-height: 1.9em;
    margin: 1em 0em;
  }
  h1, h2, h3, h4 {
    margin: 1.414em 0 0.5em;
    font-weight: inherit;
    line-height: 1;
  }
  h1 {
    margin-top: 0;
    font-size: 2em;
    font-weight: 700;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin: 0.83em 0em;
  }
  h3 {
    font-size: 1.17em;
    font-weight: 700;
    margin: 1em 0em;
  }
  h4 {
    font-size: 1.05em;
    font-weight: 700;
  }
  small, .font_small {font-size: 0.707em;}
`;

export default GlobalStyles;
