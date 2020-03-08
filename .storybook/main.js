const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules = config.module.rules.filter(f => {
      if (f.test) return f.test.toString() !== "/\\.css$/";
      return true;
    });

    config.module.rules.push({
      test: /\.css$/,
      loaders: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, "../src"),
    });

    return config;
  },
};
