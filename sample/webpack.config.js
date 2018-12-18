const CheckDependenciesWebpackPlugin = require("check-dependencies-webpack-plugin");

module.exports = {
	// Use the plugin.
	plugins: [
		new CheckDependenciesWebpackPlugin.default()
	],

	// Do just enough to get the webpack build running.
	entry: {
		main: "./entry.js"
	},
	output: {
		path: __dirname,
		filename: "./out.js"
	}
};
