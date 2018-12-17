import * as CheckDependencies from "check-dependencies";
import webpack = require("webpack");
export default class CheckDependenciesWebpackPlugin {
    constructor(private options: CheckDependencies.Config) {
    }
    apply(compiler: webpack.Compiler) {
        compiler.hooks.beforeRun.tapPromise(
            "CheckDependenciesWebpackPlugin",
            () => CheckDependencies.default(this.options)
        );
    }
}
