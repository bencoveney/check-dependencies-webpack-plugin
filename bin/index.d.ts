import * as CheckDependencies from "check-dependencies";
import webpack = require("webpack");
export default class CheckDependenciesWebpackPlugin {
    private options;
    constructor(options: CheckDependencies.Config);
    apply(compiler: webpack.Compiler): void;
}
