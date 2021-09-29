const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js', 
        path: path.resolve(__dirname, 'publicbuild')
    }
};

module.exports = merge(baseConfig, config);
