import webpack from "webpack";
import { buildLoaders } from "./buildLoders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import {buildDevServer} from "./buildDevServer";
import { BuildOptions } from "./types/config";

export function buildWebpackConfigutation(options : BuildOptions) : webpack.Configuration {

    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ?  buildDevServer(options) : undefined,
    }
}