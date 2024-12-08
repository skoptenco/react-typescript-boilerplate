import {merge} from 'webpack-merge';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import commonConfig from "./webpack.config.common";
import {TBuildEnv} from "./build/types";
import webpack from "webpack";
import TerserPlugin from "terser-webpack-plugin";

const plugins = [
    new MiniCssExtractPlugin({
        filename: "[contenthash].css",
    })
]

const prodConfig: (env: TBuildEnv) => webpack.Configuration = (env) => merge(commonConfig(env), {
    mode: "production",
    target: "browserslist",
    plugins,
    devtool: false,
    optimization: {
        usedExports: false,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: false,
                    compress: true,
                    output: {
                        beautify: true,
                        comments: false
                    },
                },
                extractComments: false
            })
        ],
        splitChunks: {
            chunks: "all",
            minSize: 0,
            maxInitialRequests: 20,
            maxAsyncRequests: 20,
            cacheGroups: {
                common: {
                    minChunks: 2,
                    priority: -10
                }
            }
        },
        runtimeChunk: "single"
    },
})

export default prodConfig;