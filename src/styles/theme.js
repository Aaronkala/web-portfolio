import { darken } from "polished";

const color = {
  primary: "#604C8D",
  secondary: "#6AD979",
  alert: "#FA5B75",
  info: "#FFD464",
  gray: ["#eee", "#ddd", "#aaa", "#888", "#555", "#333"],
  background: "#1c1c1c",
  textAlt: "#333",
  text: "#fffefe"
};

const hoverDarken = 0.1;
const activeDarken = 0.2;

const theme = {
  color: {
    ...color,
    hover: {
      primary: darken(hoverDarken, color.primary),
      alert: darken(hoverDarken, color.alert),
      info: darken(hoverDarken, color.info),
      gray: [
        darken(hoverDarken, color.gray[0]),
        darken(hoverDarken, color.gray[1]),
        darken(hoverDarken, color.gray[2])
      ]
    },
    active: {
      primary: darken(activeDarken, color.primary),
      alert: darken(activeDarken, color.alert),
      info: darken(activeDarken, color.info),
      gray: [
        darken(activeDarken, color.gray[0]),
        darken(activeDarken, color.gray[1]),
        darken(activeDarken, color.gray[2])
      ]
    }
  },
  font: {
    heading: "Open Sans",
    body: "Open Sans"
  },
  button: {
    radius: "0.5em"
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  }
};

export default theme;
