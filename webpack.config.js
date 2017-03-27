var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/app.jsx',
        contact: './src/contact.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        stats: "errors-only",
        open: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.jsx$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home Page',
            minify: {
                collapseWhitespace: false
            },
            hash: true,
            chunks: ['app'],
            filename: 'index.html',
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details) 
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Page',
            minify: {
                collapseWhitespace: false
            },
            hash: true,
            chunks: ['contact'],
            filename: 'contact.html',
            template: './src/contact.html',
        }),
        new ExtractTextPlugin(
            {
                filename: "styles.css",
                allChunks: true
            }
        )
    ]
}