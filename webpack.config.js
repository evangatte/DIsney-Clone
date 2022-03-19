const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env, argv) => {
    return {
        // Define the entry points of our application (can be multiple for different sections of a website)
        entry: {
            main: "./client/index.js", // Client JavaScript.
            style: "./client/style.js" // This pulls in the SCSS. It is compiled in JavaScript, but CSS files are the result.
        },

        // Define the destination directory and filenames of compiled resources
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, "dist")
        },

        // Define development options
        devtool: "source-map",

        // Define loaders
        // https://webpack.js.org/loaders/
        // Webpack enables use of loaders to preprocess files. This allows you to bundle any static 
        // resource way beyond JavaScript. You can easily write your own loaders using Node.js.
        module: {
            rules: [
                // Compile and extract SCSS files
                {
                    test: /\.scss$/,
                    exclude: /(node_modules)/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                url: false
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                ident: "postcss",
                                plugins: [require("autoprefixer")()]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                sassOptions: {
                                    outputStyle: argv.mode === "production" ? "compressed" : "expanded",
                                },
                            },
                        }
                    ]
                },
                // Use babel for JS files
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                }
            ]
        },

        // Define used plugins
        plugins: [
            new Dotenv({
                path: "./.env"
            }),
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            })
        ]
    };
};
