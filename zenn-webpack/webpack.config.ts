// require 文から import 文へ
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** 以下 2 行は補完を効かせるためのインポート */
import "webpack-dev-server";
import { Configuration } from "webpack";

const isDev = process.env.NODE_ENV === "development";

const config: Configuration = {
  mode: isDev ? "development" : "production",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "asset/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev,
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.(ico|png|svg|ttf|otf|eot|woff?2?)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      scriptLoading: "defer",
    }),
  ],
  devtool: isDev ? "inline-source-map" : undefined,
  devServer: {
    static: {
      directory: "./dist",
    },
  },
};

// 設定をデフォルトエクスポート
export default config;