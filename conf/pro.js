var webpack=require('webpack'),
	_path=require('path'),
	ExtractTextPlugin=require('extract-text-webpack-plugin'),
	HtmlWebpackPlugin=require('html-webpack-plugin'),
	BabiliPlugin=require('babili-webpack-plugin');

var config={
	entry:{
		document:_path.resolve(__dirname,"../src/entries/document/index.js")
	},
	output:{
		path:_path.resolve(__dirname,'../dist'),
		publicPath:'../',
		filename:'js/[name]/index.js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader',
				options:{
					loaders:{
						css:ExtractTextPlugin.extract({
							use:'css-loader',
							fallback:'vue-style-loader!sass-loader'
						})
					}
				}
			},
			{
				test:/\.css$/,
				loader:ExtractTextPlugin.extract({
					use:'css-loader',
					fallback:'style-loader'
				})
			},
			{
				test:/\.scss$/,
				loader:ExtractTextPlugin.extract({
					use:[
						{
							loader:"css-loader"
						},
						{
							loader:"sass-loader"
						}
					],
					fallback:"style-loader"
				})
			},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['es2015']
				}
			},
			{
				test:/\.(png|jpg|gif|svg)$/,
				loader:'file-loader',
				options:{
					name:'[name].[ext]'
				}
			}
		]
	},
	resolve:{
		alias:{
			'vue':'vue/dist/vue.runtime.min.js'
		}
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:JSON.stringify("production")
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor',
			filename:'vendor.bundle.js'
		}),
		new BabiliPlugin({}),
		new ExtractTextPlugin({
			filename:"css/[name].style.css",
			allChunks:true
		})		
	]
};

[].forEach(function(chunk){
	config.plugins.push(new HtmlWebpackPlugin({
		filename:'view/'+chunk+'.html',
		template:_path.resolve(__dirname,'../template/'+chunk+'.html'),
		chunks:['vendor',chunk]
	}));
});

module.exports=config;
