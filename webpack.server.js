const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

//we are building a bundle file for node.js rather than for the browser
const config = {
    target: 'node',
    entry: './server/index.js', //the first file webpack looks at and decides what different files to pull into output bundle
    output: {
        filename: 'bundle.js', // telling the webpack, where to put the bundled file 
        path: path.resolve(__dirname, 'build')
    },
    
    externals : [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
