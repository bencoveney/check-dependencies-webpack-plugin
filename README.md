# check-dependencies-webpack-plugin

Webpack plugin that checks that the correct versions of your package's
dependencies are installed.

Sample webpack config:

```JavaScript
// webpack.config.js

const CheckDependenciesWebpackPlugin = require("check-dependencies-webpack-plugin");

module.exports = {
	// Use the plugin.
	plugins: [
		new CheckDependenciesWebpackPlugin()
	]

	// Other webpack config...
};
```

TODO:

- https://webpack.js.org/contribute/release-process/
