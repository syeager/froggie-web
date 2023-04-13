/* eslint-disable @typescript-eslint/no-var-requires */
// const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TsconfigPathsPluginDefault = require("tsconfig-paths-webpack-plugin");

const srcPath = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, "dist");

module.exports = {
  stats: {
    errorDetails: true,
  },
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8888",
    "webpack/hot/only-dev-server",
    path.resolve(srcPath, "index.tsx"),
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
    plugins: [new TsconfigPathsPluginDefault()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"], // ?name=[name].[ext] is only necessary to preserve the original file name
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: distPath,
    publicPath: "/",
  },
  context: srcPath,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("public", "index.html"),
      favicon: path.resolve("public", "images", "favicon-32.ico"),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "public", "images"), to: distPath },
        { from: path.resolve(__dirname, "public", "meta"), to: distPath },
      ],
    }),
    // new webpack.HotModuleReplacementPlugin(),
    //new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    devMiddleware: {
      publicPath: "/",
    },
    historyApiFallback: true,
    port: 8888,
    static: distPath,
  },
};
