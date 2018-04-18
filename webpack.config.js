const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resPath(pth) {
	return path.resolve(__dirname, pth)
}

const extractCss = new ExtractTextPlugin("css/[name].css");
const extractModuleCss = new ExtractTextPlugin("css/bundle.min.css");

const statsConfig = {
	modules: false,
	hash: false
};

module.exports = {
//	devtool: "cheap-eval-source-map",
	devServer: {
		contentBase: resPath("dist"),
		stats: statsConfig,
		open: true,
		overlay: true,
		compress: true,
		port: 8080
	},
	stats: statsConfig,
	entry: {
		index: resPath("src/js/index.js")
	},
	output: {
		path: resPath("dist"),
		filename: "js/[name].js",
		crossOriginLoading: "anonymous",
		libraryTarget: "var",
		library: ["gungi"]
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
	]
}
