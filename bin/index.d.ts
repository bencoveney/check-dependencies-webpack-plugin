import { Config } from "check-dependencies";
import webpack = require("webpack");
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type Config = Omit<Config, "log" | "error">;
/**
 * Webpack plugin to check that the correct dependencies are installed using the
 * check-dependencies library.
 *
 * @export
 * @class CheckDependenciesWebpackPlugin
 */
export default class CheckDependenciesWebpackPlugin {
    private options;
    /**
     * Creates an instance of CheckDependenciesWebpackPlugin.
     * @param {Partial<Config>} [options={}] Options for the check-dependencies library.
     * @memberof CheckDependenciesWebpackPlugin
     */
    constructor(options?: Partial<Config>);
    /**
     * Set up the webpack plugin.
     *
     * @param {webpack.Compiler} compiler The webpack compiler.
     * @memberof CheckDependenciesWebpackPlugin
     */
    apply(compiler: webpack.Compiler): void;
}
export {};
