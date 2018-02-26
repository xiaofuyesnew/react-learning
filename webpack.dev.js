const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch', // 激活HMR
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/main.js')
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Demo',
            template: path.resolve(__dirname, './src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
}