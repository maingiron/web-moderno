const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new uglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new optimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                miniCssExtractPlugin.loader,                
                // 'style-loader', // Adiciona CSS dentro da DOM injentando a tag <style>
                'css-loader', // Interpreta @import, url() ...
                'sass-loader'
            ]
        }, {
           test: /\.(png|svg|jpg|gif)$/,
           use: ['file-loader']
        }]
    }
}