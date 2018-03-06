const path = require('path');
module.exports = {
    entry: {
        entry: './main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mainBundle.js',
        publicPath: 'temp/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [],
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        host: 'localhost',
        compress: true,
        port: 8082
    }
};