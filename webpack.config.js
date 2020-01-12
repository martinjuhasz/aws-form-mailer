const path = require('path')
const slsw = require('serverless-webpack')

module.exports = {
	entry: slsw.lib.entries,
	target: 'node',
	mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
	performance: {
		hints: false,
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	output: {
		libraryTarget: 'commonjs2',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js',
	},
}
