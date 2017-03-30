var _path=require('path');
var	webpack=require('webpack');

var config={
	entry:{
		document:'./src/entries/document/index.js'
	},
	output:{
		path:_path.resolve(__dirname,'../dist'),
		publicPath:'/dist/',
		filename:'js/[name]/index.js'
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader',
				exclude:/node_modules/,
				options:{
					loaders:{
						scss:'vue-style-loader!css-loader!sass-loader'
					}
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
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
			},
			{
				test:/\.json$/,
				loader:'json-loader'
			}
		]
	},
	resolve:{
		alias:{
			'vue$':'vue/dist/vue.runtime.esm.js'
		}
	},
	devServer:{
		contentBase:_path.resolve(__dirname,'../view'),
		port:3030,
		compress:true,
		inline:true
	},
	plugins:[
		new webpack.DefinePlugin({
			'process.env':{
				NODE_ENV:JSON.stringify('development')
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports=config;