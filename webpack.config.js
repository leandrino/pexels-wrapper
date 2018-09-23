var path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, 'lib'),
		libraryTarget: 'umd',
		library: 'Pexels'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json']
	},
	module: {
		rules: [{
			// Include ts, tsx, and js files.
			test: /\.(tsx?)|(js)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}],
	}
};
