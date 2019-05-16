const path = require('path');

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/components/wrapper/wrapper'),
  },
  skipComponentsWithoutExample: true,
};
