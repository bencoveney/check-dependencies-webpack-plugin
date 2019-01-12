"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const check_dependencies_1 = __importDefault(require("check-dependencies"));
/**
 * Webpack plugin to check that the correct dependencies are installed using the
 * check-dependencies library.
 *
 * @export
 * @class CheckDependenciesWebpackPlugin
 */
class CheckDependenciesWebpackPlugin {
    /**
     * Creates an instance of CheckDependenciesWebpackPlugin.
     * @param {Partial<Config>} [options={}] Options for the check-dependencies library.
     * @memberof CheckDependenciesWebpackPlugin
     */
    constructor(options = {}) {
        this.options = options;
    }
    /**
     * Set up the webpack plugin.
     *
     * @param {webpack.Compiler} compiler The webpack compiler.
     * @memberof CheckDependenciesWebpackPlugin
     */
    apply(compiler) {
        // It would be good to use an earlier webpack hook (beforeRun?) but we
        // ideally want access to the compilation so we can omit errors correctly.
        compiler.hooks.make.tapPromise("CheckDependenciesWebpackPlugin", compilation => check_dependencies_1.default(this.options).then(result => {
            if (result.status !== 0) {
                result.error.forEach(error => compilation.errors.push(`CheckDependencies: ${error}`));
            }
            // Nothing will use this but it is useful for testing.
            return result;
        }));
    }
}
exports.default = CheckDependenciesWebpackPlugin;
