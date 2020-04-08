const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const SRC = path.join(__dirname, "src");
const DIST = path.join(__dirname, "dist");
const DIR_NODE = path.join(__dirname, "node_modules");

const entries = {};
const copyPath = [
    'main-copy.js'
]; //
const plugins = [];

// build copy
if (copyPath && copyPath.length > 0) {
    plugins.push(new CopyPlugin(copyPath.map(cPath =>
        ({from: path.join(SRC, cPath), to: path.join(DIST, cPath)})
    )))
}


module.exports = (env, argv) => {
    return {
        context: SRC,
        entry: {
            'index': path.join(SRC, 'index.js')
        },
        mode: argv.mode || "development",
        target: "electron-main",
        output: {
            path: DIST,
            filename: `[name].js`
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
