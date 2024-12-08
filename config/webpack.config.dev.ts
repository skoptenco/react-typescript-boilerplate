import {merge} from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import commonConfig from "./webpack.config.common";
import {TBuildEnv} from "./build/types";
import webpack from "webpack";

const plugins = [
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    })
]

const devConfig: (env: TBuildEnv) => webpack.Configuration = (env) => merge(commonConfig(env), {
    mode: "development",
    target: "web",
    plugins,
    devtool: "inline-source-map",
})

export default devConfig