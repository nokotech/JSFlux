const path = require('path');

// (reference) http://kujira16.hateblo.jp/entry/2016/07/29/215735
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app: './src/app.jsx',
    },
    output: {
        path: path.resolve('./dist'),
        filename: "[name].bundle.js",
        devtoolModuleFilenameTemplate: 'srcmap/[resource-path]',
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx'],
    },
    module: {
        rules: [{
            test: /\.js[x]$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
};