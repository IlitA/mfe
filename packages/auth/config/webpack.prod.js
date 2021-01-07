const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './public/index.html',
    //     }),
    // ],
};

module.exports = merge(commonConfig, prodConfig);
