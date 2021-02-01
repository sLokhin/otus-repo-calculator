const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.tsx")
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Lesson calculator",
            template: path.resolve(__dirname, "./src/template.html"), //шаблон
            filename: "index.html", //название выходного файла
        }),
        new CleanWebpackPlugin(),
    ]
}
