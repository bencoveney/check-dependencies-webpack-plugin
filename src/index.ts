import * as CheckDependencies from "check-dependencies";
import webpack = require("webpack");
export interface Config extends CheckDependencies.Config {}
export default class CheckDependenciesWebpackPlugin {
    constructor(private options: Config) {
    }
    apply(compiler: webpack.Compiler) {
        compiler.hooks.beforeRun.tapPromise(
            "CheckDependenciesWebpackPlugin",
            () => CheckDependencies.default(this.options).then(result => {
                if (result.status !== 0) {
                    throw new Error("CheckDependenciesWebpackPlugin failed");
                } else return result;
            })
        );
    }
}
