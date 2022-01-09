const path = require('path') // resolve path
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // minify css
const TerserPlugin = require('terser-webpack-plugin') // minify js
const autoprefixer = require('autoprefixer')

module.exports = {
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'] // we can import without typing '.js or .jsx'
	},
	entry: {
		index: path.join(__dirname, 'src/index.jsx')
	},
	output: {
		publicPath: '',
		path: path.resolve(__dirname, './prod'),
		filename: '[name].[contenthash].bundle.js' // for production use [contenthash], for developement use [hash]
	},
	optimization: {
		minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin({})],
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
	},
	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								ident: 'postcss',
								plugins: [autoprefixer]
							}
						}
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components|prod)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }),
	]
}
