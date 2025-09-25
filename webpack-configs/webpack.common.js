const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "frontend.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // reg exp
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/services.html",
      filename: "services.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/prices.html",
      filename: "prices.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/cookies.html",
      filename: "cookies.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/privacy.html",
      filename: "privacy.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/terms.html",
      filename: "terms.html",
      inject: "body",
    }),
  ],
};
