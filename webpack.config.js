const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resPath(pth) {
	return path.resolve(__dirname, pth)
}

const extractCss = new ExtractTextPlugin("css/[name].css");
const extractModuleCss = new ExtractTextPlugin("css/bundle.min.css");

module.exports = {
//	devtool: "cheap-eval-source-map",
	entry: {
		index: resPath("src/js/index.js")
	},
	output: {
		path: resPath("dist"),
		filename: "js/[name].js",
		crossOriginLoading: "anonymous"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: extractCss.extract({
					use: {
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[name]-[local]"
						}
					}
				}),
				exclude: [
					/node_modules/,
					/\.min\.css$/
				]
			},
			{
				test: /\.min\.css$/,
				use: extractModuleCss.extract({
					use: "css-loader"
				})
			}
		]
	},
	resolve: {
		alias: {},
		extensions: [".js"],
		modules: [
			resPath("src"),
			"node_modules"
		]
	},
	plugins: [
		new CleanWebpackPlugin(["dist/*"], { verbose: false }),
		extractModuleCss, // extract plugin order determines <link> order in HTML output
		extractCss,
		new HtmlWebpackPlugin({
			template: "src/html/index.html",
			filename: "index.html"
		})
	],
	stats: {
		modules: false,
		hash: false
	}
}
