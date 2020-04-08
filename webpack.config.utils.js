const webpack = require("webpack");
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const PACKAGE = require("./package");

module.exports = {
    copyPlugin: copyPlugin,
    htmlPluginOptions: htmlPluginOptions,
    getVersion: JSON.stringify(PACKAGE.version),
    definePlugin: definePlugin
}

function copyPath(cPath, srcDir, outDir) {
    return {
        from: path.join(srcDir, cPath),
        to: path.join(outDir, cPath)
    }
}

function copyPlugin(cPaths, srcDir, outDir) {
    if (cPaths == null) return [];
    else return new CopyPlugin(cPaths.map(cPath => copyPath(cPath, srcDir, outDir)));
}

function htmlPluginOptions(templatePath, srcFullPath, projectPath, htmlDistrIndex) {
    return {
        template: path.join(srcFullPath, projectPath, templatePath),
        filename: path.join(projectPath, htmlDistrIndex),
    }
}

function definePlugin(definitionObj) {
    return new webpack.DefinePlugin(definitionObj)
}

