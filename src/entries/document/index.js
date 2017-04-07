import {Vue} from '../../common/conf/common.js';

import pagination from '../../common/components/pagination.vue';
import select from '../../common/components/select.vue';

let _$pagination=new (Vue.extend(pagination))({
	el:"#pagination",
	data:{
		layout:['prev','pager','next','jumper'],
		total_items:101,
		current_page:1
	}
});

_$pagination.$on("page:onchange",function(currentPage){
	console.log(currentPage);
});