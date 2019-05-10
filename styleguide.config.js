const path = require('path');

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguidist/wrapper'),
  },
  skipComponentsWithoutExample: true,
};
