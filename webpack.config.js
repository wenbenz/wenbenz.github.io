const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + '/app/index.html',
            filename: 'index.html',
            inject: 'body',
            favicon: __dirname + '/app/assets/favicon.ico'
        }),
        new CopyWebpackPlugin([
            { from: __dirname + '/app/assets/img', to: 'img' },
            { from: __dirname + '/app/assets/files', to: 'files' }
        ])
    ]
};
