var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var webpack = require('webpack');
var devServer = new WebpackDevServer(
    webpack(config),
    {
        contentBase: __dirname,
        publicPath: '/dist/',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    }
).listen(8000, 'localhost');