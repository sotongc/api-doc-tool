/*dependencies*/
var faker=require("faker");
var _=require("lodash");

/*schema*/
var _$schema={
	people:function(n){
		return {
			id:n,
			name:faker.name.findName(),
			avatar:faker.internet.avatar()
		};
	}
};

module.exports=function(){
	return {
		people:_.times(30,_$schema.people)
	};
};

