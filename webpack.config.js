const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = "development";

if (process.env.NODE_ENV === 'production') {
    mode = "production";
    target = "browserslist";
}

module.exports = {
    mode: mode,
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(s[ac]|a)ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    devtool: "source-map",
    devServer: {
        static: "./dist",
        hot: true,
    }
}