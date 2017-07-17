var path=require('path'),
	base=require('./webpack.base.config.js'),
	webpack=require('webpack');

// source map
base.devtool="cheap-module-eval-source-map";

// loaders

base.module={
	rules:[
		{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:/node_modules/,
			query:{
				presets:'env'
			}
		},
		{
			test:/\.scss$/,
			use:[
				{loader:'style-loader'},
				{loader:'css-loader',options:{sourceMap:true}},
				{loader:'sass-loader',options:{sourceMap:true}}
			]
		},
		{
			test:/\.vue$/,
			loader:'vue-loader',
			exclude:/node_modules/,
			options:{
				loaders:{
					scss:'vue-style-loader!css-loader!sass-loader'
				}
			}
		}
	]
};

// resolve

base.resolve={
	alias:{
		'vue$':'vue/dist/vue.runtime.esm.js'
	}
};

// develop server

base.devServer={
	contentBase:path.resolve(__dirname,"../"),
	port:3030,
	compress:true,
	inline:true,
	proxy:{}
};

// plugins

base.plugins=[
	new webpack.DefinePlugin({
		'process.env':{
			NODE_ENV:JSON.stringify('development')
		}
	}),
	new webpack.HotModuleReplacementPlugin()
];

module.exports=base;