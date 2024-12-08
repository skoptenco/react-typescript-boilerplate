import webpack from "webpack";
import {TBuildPaths} from "./types";
import HtmlWebpackPlugin from "html-webpack-plugin";

const buildPlugins: (paths: TBuildPaths) => webpack.WebpackPluginInstance[] = (paths) => {

    return [
        new HtmlWebpackPlugin({
            hash: true,
            title: "React Typescript Boilerplate",
            template: paths.html,
            filename: "index.html",
            inject: true,
        })
    ]
}

export default buildPlugins;