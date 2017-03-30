import {Vue} from '../../common/conf/common.js';

import buttons from './components/buttons.vue';

let _$buttons=new (Vue.extend(buttons))({
	el:"#btns",
	data:{
		buttons:[
			{name:'get',text:'GET'},
			{name:'post',text:'POST'},
			{name:'put',text:'PUT'},
			{name:'delete',text:'DELETE'}
		],
		labels:[
			{type:'string'},
			{type:'number'},
			{type:'boolean'},
			{type:'array'},
			{type:'object'}
		]
	}
});