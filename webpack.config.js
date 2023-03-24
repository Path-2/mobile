const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const path = require("path");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias['../Utilities/Platform'] =
    'react-native-web/dist/exports/Platform'

  config.module.rules.push({
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: ["react-native-svg-transformer-fix-expo/loader"],
  });
  return config;
};
