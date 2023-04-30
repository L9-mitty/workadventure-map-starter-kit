const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    devServer: {
        // The test webserver serves static files from the root directory.
        // It comes with CORS enabled (important for WorkAdventure to be able to load the map)
        static: {
            directory: ".",
            serveIndex: true,
            watch: true,
        },
        host: 'localhost',
        allowedHosts: "all",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'scriptmain.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};

module.exports = {
    mode: 'development',
    entry: './src/challenge.ts',
    devtool: 'inline-source-map',
    devServer: {
        // The test webserver serves static files from the root directory.
        // It comes with CORS enabled (important for WorkAdventure to be able to load the map)
        static: {
            directory: ".",
            serveIndex: true,
            watch: true,
        },
        host: 'localhost',
        allowedHosts: "all",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'scriptchallenge.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};