const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import { resolve } from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";

const DIST = path.resolve(__dirname, "..", "build");
const SRC = path.resolve(__dirname, "..", "src");

const config = {
  entry: SRC + "/index.tsx",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: DIST,
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC + "/index.html",
    }),
  ],
};

module.exports = config;
 