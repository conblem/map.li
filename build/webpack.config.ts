import {
  Configuration,
  HotModuleReplacementPlugin,
  EnvironmentPlugin
} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { join } from "path";

const isDev: boolean = process.env.NODE_ENV === "development";

const config: Configuration = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.tsx",
  output: {
    path: join(__dirname, "..", "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      preact: "react"
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(),
    new EnvironmentPlugin(["NODE_ENV"])
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};

export default config;
