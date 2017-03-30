var dev=require('./conf/dev.js');
var pro=require('./conf/pro.js');

module.exports=(function(env){
	if(env=="development")
		return dev;
	if(env=="production")
		return pro;
	return {};
})(process.env.NODE_ENV);