const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");
require("dotenv").config({ path: "src/firebase/.env" });
module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCSSExtractPlugin({
      filename: "bundle.css",
    }),
    // new ESLintPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
