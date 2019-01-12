import { Config } from "check-dependencies";
import webpack = require("webpack");
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
declare type Options = Omit<Config, "log" | "error">;
/**
 * Webpack plugin to check that the correct dependencies are installed using the
 * check-dependencies library.
 *
 * @export
 * @class CheckDependenciesWebpackPlugin
 */
declare class CheckDependenciesWebpackPlugin {
    private options;
    /**
     * Creates an instance of CheckDependenciesWebpackPlugin.
     * @param {Partial<Options>} [options={}] Options for the check-dependencies library.
     * @memberof CheckDependenciesWebpackPlugin
     */
    constructor(options?: Partial<Options>);
    /**
     * Set up the webpack plugin.
     *
     * @param {webpack.Compiler} compiler The webpack compiler.
     * @memberof CheckDependenciesWebpackPlugin
     */
    apply(compiler: webpack.Compiler): void;
}
export = CheckDependenciesWebpackPlugin;
