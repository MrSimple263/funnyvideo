const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'index_bundle.js',

    },
    devServer: {
        static: {
            directory: __dirname,
        },
        port: 8001
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    }
}
