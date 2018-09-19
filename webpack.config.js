var path = require('path');

module.exports = {
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'app.bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [{
			// Include ts, tsx, and js files.
			test: /\.(tsx?)|(js)$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
		}],
	}
};
