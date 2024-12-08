import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const buildLoaders: () => webpack.RuleSetRule[] = () => {

    const babelLoader: webpack.RuleSetRule = {
        test: /\.([jt]sx?)/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                cacheDirectory: true,
            }
        }
    }

    const htmlLoader: webpack.RuleSetRule = {
        test: /\.(html)$/,
        use: ["html-loader"]
    }

    const cssLoader: webpack.RuleSetRule = {
        test: /\.(s[ac]|c)ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader", // translates css into CommonJS
            },
            {
                // autoprefixer
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [
                            [
                                "postcss-preset-env",
                                {
                                    // Options
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    }

    const imageLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: {
            filename: "assets/img/[hash][ext]",
        },
    }

    const fontLoader: webpack.RuleSetRule = {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
            filename: "assets/fonts/[hash][ext]",
        },

    }

    return [
        babelLoader,
        htmlLoader,
        cssLoader,
        imageLoader,
        fontLoader
    ];
}

export default buildLoaders;