<template>
	<div class="select">
		<div class="input" @click="select">100/page</div>
		<ul :class="['dropdown-list',{'show-dropdown-list':isshow}]">
			<li v-for="item in options" :val="item.val" :key="item.key" :class="{selected:item.selected}">{{item.text}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				options:[
					{key:0,text:'100/page',val:100,selected:true},
					{key:1,text:'200/page',val:200,selected:false},
					{key:2,text:'300/page',val:300,selected:false},
					{key:3,text:'400/page',val:400,selected:false}
				],
				isshow:false
			};
		},
		methods:{
			select:function(){
				this.isshow=true;
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
			padding:0px 0px;
			color:#48576a;
			border:1px solid #d1dbe5;
			margin-top:6px;
			z-index:$top-layer;
			height:0px;
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
			transition:all 0.8s;
		}

		.show-dropdown-list{
			height:auto;
			padding:6px 0px;
		}
	}
</style>