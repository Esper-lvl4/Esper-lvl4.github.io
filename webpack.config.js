const webpack = require('webpack');
const path = require('path');
const ExtractCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

// Exctracting css with loader in prod.
let cssExp = {
	loader: ExtractCss.loader,
	options: {
		name: '[name].[ext]',
		outputPath: 'css/',
		publicPath: '../',
	}
}

// Shorthand for exporting multiple pages.
let plugs = [
	new CopyPlugin([
		{from: './dev/assets/libs/', to: './'}
	]),
	new ExtractCss({
		filename: devMode ? './css/[name].css' : '[name].[hash].css',
		chunkFilename: devMode ? './css/[id].css' : '[id].[hash].css',
	}),
	new CleanWebpackPlugin(),
]

// Just put the name of html file without extension in this list.
let pages = ['index', 'categories', 'catalog', 'product-page', 'catalog-download', 'solution-list', 'solution-page', 'portfolio-list', 'brand-page', 'news-list', 'news-item', 'album', 'contacts', 'static-page', 'subcategories'];

for (let i = 0; i < pages.length; i++) {
	plugs.push(new HtmlWebpackPlugin({
		filename: `${pages[i]}.html`,
		template: `dev/${pages[i]}.html`,
		favicon: './dev/assets/img/favicon.png',
		inject: true,
		hash: true,
	}))
}

module.exports = {
	mode: 'development',
	entry: {
		main: './dev/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		publicPath: './',
	},
	optimization: {
		minimize: false,
	},
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, 'dev/assets'),
			Images: path.resolve(__dirname, 'dev/assets/img'),
			'vue$': 'vue/dist/vue.common.js',
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
							],
							ignore: ['/node-modules/'],
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node-modules/,
				use: [
					cssExp,
					// 'style-loader',
					'css-loader',
				]
			},
			{
				test: /\.styl$/,
				exclude: /node-modules/,
				use: [
					cssExp,
					// 'style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						interpolate: true
					}
				}
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/',
							emitFile: true,
						}
					}
				]
			},
			{
				test: /\.(ttf|otf)/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/',
						emtFile: true,
					}
				}]
			}
		]
	},
	plugins: plugs,
	devServer: {
		publicPath: '/dev/',
		hot: true,
		compress: true,
		port: 3000
	}
}
