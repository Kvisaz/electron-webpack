const path = require("path");
const ConfigUtils = require('./webpack.config.utils');
const PACKAGE = require("./package.json");


const SRC = path.join(__dirname, "src");
const DIST = path.join(__dirname, "dist");
const DIR_NODE = path.join(__dirname, "node_modules");

const entries = {
    'index': path.join(SRC, 'index.ts'),
};
const copyPaths = [
    'package.json' // APPLICATION package.json
]; //
const plugins = [];

// build copy
plugins.push(ConfigUtils.copyPlugin(copyPaths, SRC, DIST))

module.exports = (env, argv) => {
    return {
        context: SRC,
        entry: entries,
        mode: argv.mode || "development",
        target: "electron-main",
        output: {
            path: DIST,
            filename: `[name].js`
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: PACKAGE.devPort,
            disableHostCheck: true
        },
        resolve: {
            extensions: ['.ts', '.js'],
            modules: [
                SRC,
                DIR_NODE
            ]
        },
        module: {
            rules: [
                {test: /\.tsx?$/, loader: "ts-loader"},
            ],
        },

        plugins: plugins,
        // watch: false,
    };
};
