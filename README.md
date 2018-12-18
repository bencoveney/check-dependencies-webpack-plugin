# check-dependencies-webpack-plugin

Webpack plugin that checks that the correct versions of your package's
dependencies are installed.

Sample webpack config:

```JavaScript
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
```

TODO:

- https://webpack.js.org/api/plugins/
- https://survivejs.com/webpack/extending/plugins/
- https://webpack.js.org/api/plugins/
- https://webpack.js.org/contribute/release-process/
