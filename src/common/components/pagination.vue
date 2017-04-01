<template>
	<div class="pagination">
		<size></size>
		<p>1243 2234 3234 4234</p>
	</div>
</template>
<script>
	import select from './select.vue';
	export default{
		data:function(){
			return {
				layout:['size','prev','pager','next','jumper','total'],
			};
		},
		components:{
			size:select
		}
	}
</script>
<style lang="scss" scoped>
	@import '../css/constants';
	.pagination{
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
</style>