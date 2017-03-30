<template>
	<div>
		<button type="button" v-for="(btn, $i) in buttons" :class="['method-btn',btn_class[$i]]">{{btn.text}}</button>
		<label v-for="(label, $i) in labels" :class="[label_class[$i],'datatype-label']">{{label.type}}</label>
	</div>
</template>
<script>
	export default{
		computed:{
			btn_class:function(){
				return this.buttons.map(val=>`http-${val.name}`);
			},
			label_class:function(){
				return this.labels.map(val=>`datatype-${val.type}`);
			}
		}
	};
</script>
<style lang="sass" scoped>
	@import '../../../common/css/constants';
	@import '../../../common/css/mixins';
</style>