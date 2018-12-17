"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const CheckDependencies = __importStar(require("check-dependencies"));
class CheckDependenciesWebpackPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.beforeRun.tapPromise("CheckDependenciesWebpackPlugin", () => CheckDependencies.default(this.options));
    }
}
exports.default = CheckDependenciesWebpackPlugin;
