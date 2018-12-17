declare module "check-dependencies" {
	/**
	 * The status of the dependency check
	 */
	export enum Status {
		Success = 0,
		Fail = 1
	}

	export interface Result {
		// 0 if successful, 1 otherwise
		status: Status;

		// true if dependencies were already satisfied
		depsWereOk: boolean;

		// array of logged messages
		log: any[];

		// array of logged errors
    error: any[];
	}

	/**
	 * Config options for the dependency check.
	 */
	export interface Config {
		// Package manager to check against. Possible values: 'npm', 'bower'.
		// (Note: for bower you need to have the bower package installed either
		// globally or locally in the same project in which you use
		// check-dependencies).
		// Default: 'npm'.
		packageManager: "npm" | "bower";

		// Path to the directory containing package.json or bower.json.
		// Default: the closest directory containing package.json or bower.json
		// (depending on packageManager specified) when going up the tree, starting
		// from the current one
		packageDir: string;

		// Ensures all installed dependencies are specified in package.json or
		// bower.json.
		// NOTE: Don't use this option with npm 3.0.0 or newer as it deduplicates
		// the file dependency tree by default so check-dependencies will think
		// many modules are excessive whereas in fact they will not.
		// Default: false
		onlySpecified: boolean;

		// Installs packages if they don't match. With the onlySpecified option
		// enabled prune excessive packages as well.
		// Default: false
		install: boolean;

		// The list of keys in package.json or bower.json where to look for package
		// names & versions.
		// Default: ['dependencies', 'devDependencies']
		scopeList: String[];

		// The list of keys in package.json or bower.json where to look for
		// optional package names & versions. An optional package is not required
		// to be installed but if it's installed, it's supposed to match the
		// specified version range.
		// This list is also consulted when using onlySpecified: true.
		// Default: ['optionalDependencies']
		optionalScopeList: string[];

		// By default, check-dependencies will skip version check for custom
		// package names, but will still check to see if they are installed. For
		// example:
    // "dependencies": {
		//   "specialSemver059": "semver#0.5.9"
    // }
		// If checkCustomPackageNames is enabled, check-dependencies will parse the
		// version number (after the hash) for custom package names and check it
		// against the version of the installed package of the same name.
		// Default: false
		checkCustomPackageNames: boolean;

		// By default, check-dependencies will skip version check for packages
		// whose version contains the full repository path. For example:
		// "dependencies": {
		//   "semver": "https://github.com/npm/node-semver.git#0.5.9"
		// }
		// If checkGitUrls is enabled, check-dependencies will parse the version number (after the path to the git repository and the hash) and check it against the version of the installed package.
		// Default: false
		checkGitUrls: boolean;

		// Prints messages to the console.
		// Default: false
		verbose: boolean;

		// A function logging debug messages (applies only if verbose: true).
		// Default: console.log.bind(console)
		log: typeof Console.prototype["log"];

		// A function logging error messages (applies only if verbose: true).
		// Default: console.error.bind(console)
		error: typeof Console.prototype["error"];
	}

	type Callback = (result: Result) => void;

	/**
	 * Check dependencies with the default options.
	 * @param callback The callback that will be invoked with the results.
	 */
	export default function(
		callback: Callback
	): void;

	/**
	 * Check dependencies with the specified options.
	 * @param options Overrides for the default options.
	 * @param callback The callback that will be invoked with the results.
	 */
	export default function(
		options: Partial<Config>,
		callback: Callback
	): void;

	/**
	 * Check dependencies with the specified options.
	 * @param options Overrides for the default options.
	 * @returns A promise that will be resolved with the results. The promise
	 * should never fail.
	 */
	export default function(
		options: Partial<Config>
	): Promise<Result>;

		/**
		 * Check dependencies synchronously with the specified options.
		 * @param options Overrides for the default options.
		 * @returns The results.
		 */
	export function sync(
		options: Partial<Config>
	): Result;
}