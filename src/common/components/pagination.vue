<template>
	<div class="pagination">
		<div></div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				layout:['size','prev','pager','next','jumper','total']
			};
		}
	}
</script>
<style lang="scss" scoped>
	.pagination{
		display:flex;
		justify-content:flex-start;
		align-items:center;
	}
</style>