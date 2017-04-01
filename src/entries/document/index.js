import {Vue} from '../../common/conf/common.js';

import pagination from '../../common/components/pagination.vue';
import select from '../../common/components/select.vue';

let _$pagination=new (Vue.extend(pagination))({
	el:"#pagination"
});