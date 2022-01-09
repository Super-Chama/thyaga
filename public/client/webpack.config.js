const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
	mode: 'development',
	devtool: 'eval-cheap-source-map',
	resolve: {
		extensions: ['.js', '.jsx'] // we can import without typing '.js or .jsx'
	},
	entry: {
		index: path.join(__dirname, 'src/index.jsx')
	},
	output: {
		path: path.resolve(__dirname, '../js/'),
		filename: 'thyaga.bundle.js' // for production use [contenthash], for developement use [hash]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css', chunkFilename: '[id].[contenthash].css' }),
	],
	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					{
						loader: 'postcss-loader', // postcss loader needed for tailwindcss
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
				test: /\.(png|svg|jpg|gif)$/i,
				use: ['file-loader']
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
			}
		]
	}
}
