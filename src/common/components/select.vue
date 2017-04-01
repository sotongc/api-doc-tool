<template>
	<div class="select">
		<div class="input" @click="extend">{{selectedItem.text}}</div>
		<ul class="dropdown-list" :style="{height:styles.height,borderWidth:styles.border,padding:styles.padding}">
			<li v-for="(item, $i) in options" :data-val="item.val" :data-index="$i" :class="{selected:$i===selectedIndex}" @click="selected">{{item.text}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				options:[],
				selectedIndex:0,
				extended:false
			};
		},
		computed:{
			dropdown_height:function(){
				return this.options.length*37+14;
			},
			selectedItem:function(){
				return this.options.length?this.options[this.selectedIndex]:{text:'',val:undefined};
			},
			val:function(){
				return this.selectedItem.val;
			},
			styles:function(){
				return {
					height:this.extended?this.dropdown_height+'px':'0px',
					border:this.extended?'1px':'0px',
					padding:this.extended?'6px 0px':'0px 0px'
				}
			}
		},
		methods:{
			extend:function(){
				this.extended=this.options.length?!this.extended:false;
			},
			selected:function(eve){
				let prop=eve.target.dataset;
				this.selectedIndex=Number(prop.index);
				window.setTimeout(this.extend,300);
			}
		}
	};
</script>
<style lang="scss" scoped>
	@import '../css/constants';

	$select-width:110px;
	.select{
		display:inline-block;
		position:relative;
		font-size:$context-font-size;
		.input{
			padding: 3px 10px {
				right:35px;
			}
			line-height:28px;
			height:34px;
			font-size:$label-font-size;
			width:$select-width;
			border:1px solid #ccc;
			font-weight:500;
			&::after{
				content:"--";
				position:absolute;
				font-family:"element-icons";
				right:15px;
			}
			cursor:pointer;
		}
		.dropdown-list{
			background-color:#fff;
			cursor:pointer;
			line-height:1.5;
			position:absolute;
			width:$select-width;
			padding:6px 0px;
			color:#48576a;
			border:1px solid #d1dbe5;
			margin-top:6px;
			z-index:$top-layer;
			overflow:hidden;
			li{
				padding:8px 10px;
				&:hover{
					background-color:#e4e8f1;
				}
			}
			.selected{
				background-color:#1c8de0 !important;
				color:#fff;
			}
			transition:all 0.45s;
		}
	}
</style>