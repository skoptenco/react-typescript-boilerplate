import type {Configuration as DevServerConfig} from "webpack-dev-server";

const buildDevServer: (port?: number) => DevServerConfig = (port) => {

    return {
        historyApiFallback: true,
        open: false,
        compress: true,
        allowedHosts: "all",
        hot: true,
        client: {
          overlay: {
            errors: true,
            warnings: true
          },
          progress: true,
        },
        port: port || 3000,
    }
}

export default buildDevServer;
