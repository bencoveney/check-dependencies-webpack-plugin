import CheckDependencies, { Config } from "check-dependencies";
import webpack = require("webpack");

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Config = Omit<Config, "log" | "error">;

/**
 * Webpack plugin to check that the correct dependencies are installed using the
 * check-dependencies library.
 *
 * @export
 * @class CheckDependenciesWebpackPlugin
 */
export default class CheckDependenciesWebpackPlugin {
  /**
   * Creates an instance of CheckDependenciesWebpackPlugin.
   * @param {Partial<Config>} [options={}] Options for the check-dependencies library.
   * @memberof CheckDependenciesWebpackPlugin
   */
  constructor(private options: Partial<Config> = {}) {}

  /**
   * Set up the webpack plugin.
   *
   * @param {webpack.Compiler} compiler The webpack compiler.
   * @memberof CheckDependenciesWebpackPlugin
   */
  apply(compiler: webpack.Compiler) {
    // It would be good to use an earlier webpack hook (beforeRun?) but we
    // ideally want access to the compilation so we can omit errors correctly.
    compiler.hooks.make.tapPromise(
      "CheckDependenciesWebpackPlugin",
      compilation =>
        CheckDependencies(this.options).then(result => {
          if (result.status !== 0) {
            result.error.forEach(error =>
              compilation.errors.push(`CheckDependencies: ${error}`)
            );
          }

          // Nothing will use this but it is useful for testing.
          return result;
        })
    );
  }
}
