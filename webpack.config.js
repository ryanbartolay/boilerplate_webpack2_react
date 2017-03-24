var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Project Webpack 2',
        minify: {
            collapseWhitespace: false
        },
        hash: true,
        template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details) 
    })]
}