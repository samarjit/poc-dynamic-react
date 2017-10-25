var path = require("path");
var webpack = require("webpack");

var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: {
        vendor: [path.join(__dirname, "src", "D1.jsx")]
    },
    output: {
        path: path.join(__dirname, "src", "dll"),
        filename: "dll.[name].js",
        library: "[name]"
    },
    module : {
        loaders : [
        {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
        }
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname,"src", "dll", "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "src")
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] 
};