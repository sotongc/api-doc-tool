/*dependencies*/
var faker=require("faker");
var _=require("lodash");

var _$tools={
	http_method:function(){
		return 'GET,POST,PUT,DELETE,HEAD,OPTION,TRACE'.split(",");
	},
	data_type:function(){
		return 'number,string,boolean,object,array'.split(",");
	},
	random_select:function(fn){
		return fn()[Math.round(Math.random()*(fn().length-1))];
	}
};

/*schema*/
var _$schema={
	doc:function(){
		return {
			id:faker.random.uuid(),
			name:faker.system.fileName(),
			create_time:faker.date.past(),
			last_modify:faker.date.recent(),
			host:_.times(Math.round(Math.random()*5),faker.internet.domainName),
			version:'v1'
		};
	},
	path:function(){
		return {
			id:faker.random.uuid(),
			path:faker.system.filePath(),
			description:faker.random.words(),
			method:_$tools.random_select(_$tools.http_method),
			request:{
				search:'',
				body:_.times(Math.round(Math.random()*8),function(){
					return {
						key:faker.random.word(),
						data_type:_$tools.random_select(_$tools.data_type),
						description:faker.random.words()
					};
				})
			},
			response:{
				result:_.times(Math.round(Math.random()*8),function(){
					return {
						key:faker.random.word(),
						data_type:_$tools.random_select(_$tools.data_type),
						description:faker.random.words()
					};
				}),
				type:faker.system.mimeType()
			}
		};
	}
};

module.exports=function(){
	return {
		documents:_.times(30,_$schema.doc),
		api:_.times(8,_$schema.path)
	};
};

