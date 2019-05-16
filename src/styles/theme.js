import { darken } from 'polished';
import breakpoints from './breakpoints';

const color = {
  primary: '#604C8D',
  secondary: '#6AD979',
  alert: '#FA5B75',
  info: '#FFD464',
  gray: ['#eee', '#ddd', '#aaa', '#888', '#555', '#333'],
  background: '#1c1c1c',
  textAlt: '#333',
  text: '#fffefe',
};

const hoverDarken = 0.1;
const activeDarken = 0.2;

const theme = {
  breakpoints,
  colors: {
    ...color,
    hover: {
      primary: darken(hoverDarken, color.primary),
      alert: darken(hoverDarken, color.alert),
      info: darken(hoverDarken, color.info),
      gray: [
        darken(hoverDarken, color.gray[0]),
        darken(hoverDarken, color.gray[1]),
        darken(hoverDarken, color.gray[2]),
      ],
    },
    active: {
      primary: darken(activeDarken, color.primary),
      alert: darken(activeDarken, color.alert),
      info: darken(activeDarken, color.info),
      gray: [
        darken(activeDarken, color.gray[0]),
        darken(activeDarken, color.gray[1]),
        darken(activeDarken, color.gray[2]),
      ],
    },
  },
  font: {
    heading: 'IBM-Plex-Mono, monospace',
    body: 'IBM-Plex-Mono, monospace',
  },
  fontSizes: [10, 12, 14, 16, 18, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  buttons: {
    primary: {
      display: 'inline-block',
      padding: '0.5em 1em',
      width: 'max-content',
      border: 'medium none',
      outline: 'currentcolor none medium',
      transition: 'all 0.1s ease 0s',
      cursor: 'pointer',
      boxShadow: `${color.secondary} 4px 4px 0px 0px`,
      borderRadius: 0,
      color: color.text,
      backgroundColor: color.primary,
      fontWeight: 300,
      textDecoration: 'underline',
      '&:hover, &:active': {
        boxShadow: 'rgb(96, 76, 141) 4px 4px 0px 0px',
        backgroundColor: 'rgb(106, 217, 121)',
        transform: 'scale(1.2)',
      },
    },
    outline: {
      color: color.primary,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
  },
  mediaQueries: {
    sm: `min-width: ${breakpoints.sm}`,
    md: `min-width: ${breakpoints.md}`,
    lg: `min-width: ${breakpoints.lg}`,
    xl: `min-width: ${breakpoints.xl}`,
  },
};

export default theme;
