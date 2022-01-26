const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    //telling webpack to run babel one every file it runs through
    module: {
        rules: [
        {
            test: /\.(ts|js)x?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
    ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.wasm']
    },
    plugins: [new MiniCssExtractPlugin()]

}
