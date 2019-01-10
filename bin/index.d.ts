import * as CheckDependencies from "check-dependencies";
import webpack = require("webpack");
export interface Config extends CheckDependencies.Config {
}
export default class CheckDependenciesWebpackPlugin {
    private options;
    constructor(options: Config);
    apply(compiler: webpack.Compiler): void;
}
