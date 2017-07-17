var path=require("path");

module.exports={
	entry:{
		main:path.resolve(__dirname,"../src/js/main.js")
	},
	output:{
		path:path.resolve(__dirname,"../dist"),
		publicPath:'/dist/',
		filename:'js/[name].js'
	}
};