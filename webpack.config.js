const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    entry: path.resolve(appDirectory, "src/index.ts"),
    output: {
        filename: "js/app.js",
        path: path.resolve("./dist/"),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        static: path.resolve(appDirectory, "public"),
        hot: true,
        devMiddleware: {
            publicPath: "/",
        },
        allowedHosts: "all"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(appDirectory, "public/index.html"),
        }),
    ],
    mode: "development",
};
