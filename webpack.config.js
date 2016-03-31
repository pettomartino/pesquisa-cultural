var webpack = require("webpack");

module.exports = {
    //cache: true,
    entry: './assets/javascript/index.js',
    output: {
        path: './public/javascript',
        publicPath: '/public/javascript',
        filename: 'bundle.js'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.tag$/, loaders: ['babel-loader', 'riotjs-loader']},
            {test: /\.s[ac]ss|\.css$/, loaders: ['style', 'css', 'sass']},
            {test: /\.json$/, loader: 'json'}
        ]
    }
};
