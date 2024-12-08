import webpack from "webpack";
import {TBuildEnv} from "./build/types";
import buildPlugins from "./build/buildPlugins";
import buildLoaders from "./build/buildLoaders";
import buildDevServer from "./build/buildDevServer";
import paths from "./build/paths";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";

const config: (env: TBuildEnv) => webpack.Configuration = ({port}) => {

    return {
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[hash].js",
            clean: true,
            publicPath: "/"
        },
        plugins: buildPlugins(paths),
        module: {
            strictExportPresence: true,
            rules: buildLoaders()
        },
        devServer: buildDevServer(port),
        resolve: {
            extensions: [".tsx", ".ts", "jsx", ".js"],
            modules: [paths.modules],
            plugins: [new TsconfigPathsPlugin({
                configFile: paths.tsconfig,
                extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx"],
                mainFields: ["es2015", "module", "main"]
            })]

        }
    }
}

export default config;