module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "safe": true,
      "allowUndefined": false
    }]
  ]
};