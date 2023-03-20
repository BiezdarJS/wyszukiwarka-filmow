const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackDeployPlugin = require('html-webpack-deploy-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'script.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: './assets/img/[name].[hash:6][ext]'
    },
    mode: 'none',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        port: 9000
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     loader: 'html-loader'
            // },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: './assets/fonts/[name][ext]',
                },
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: './assets/img/[name].[hash:6][ext]',
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }
                ],
            },
            // {
            //     test: /\.(png|jpe?g|svg)$/i,
            //     use: [
            //         {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 100000,
            //             name: "./assets/img/[name].[hash:6].[ext]"
            //         },
            //         },
            //     ],
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]
        }),
        new HTMLWebpackPlugin({
            title: 'Filimo - movie database',
            template: './src/index.html'
        }),
        new HtmlWebpackTagsPlugin({ tags: ['./assets/css/owl.carousel.css', './assets/css/owl.theme.default.css', './assets/js/owl.carousel.min.js'], append: true }),
        new HtmlWebpackDeployPlugin({
            assets: {
                copy: [
                    { from: 'src/css/owl.carousel.css', to: 'css/owl.carousel.css'},
                    { from: 'src/css/owl.theme.default.css', to: 'css/owl.theme.default.css' },
                    { from: 'src/js/assets/owl.carousel.min.js', to: 'js/owl.carousel.min.js' },
                    // { from: 'src/img', to: 'img/' }
                ],
                links: [
                        'css/owl.carousel.css',
                        'css/owl.theme.default.css'
                ],
                scripts: 'js/owl.carousel.min.js', append: false
            },
        })
    ]
}