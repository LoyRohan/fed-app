const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(process.cwd(), "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      remotes: {
        subApp: "subApp@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript", "@babel/preset-react"],
            },
          },
        ],
        exclude: /[\\/]node_modules[\\/]/,
      },
      {
        test: /\.(css|scss)$/, // Target CSS and Sass/SCSS files
        use: [
          "style-loader",
          "css-loader",
          // "sass-loader", // Add Sass loader if using Sass
          "postcss-loader", // Add PostCSS loader if using Tailwind
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
};
