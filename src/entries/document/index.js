import {Vue} from '../../common/conf/common.js';

import pagination from '../../common/components/pagination.vue';
import select from '../../common/components/select.vue';


let _$select=new (Vue.extend(select))({
	el:"#select"
});