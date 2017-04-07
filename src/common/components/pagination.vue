<script>
	import select from './select.vue';
	export default{
		props:{
			layout:{
				type:Array,
				default:function(){
					return ['prev','pager','next'];
				}
			},
			size:{
				type:Number,
				default:10
			},
			size_options:{
				type:Array,
				default:()=>[
					{val:10,text:'10'}
				]
			},
			limit:{
				type:Number,
				default:5
			}
		},
		watch:{
			current_page:function(newValue){
				this.$emit("page:onchange",newValue);
			}
		},
		computed:{
			page_length:function(){
				return Math.ceil(this.total_items/this.size);
			}
		},
		render:function(createElement){
			const map={
				size:{
					options:this.size_options
				},
				prev:{},
				pager:{
					total_items:this.total_items,
					size:this.size,
					current_page:this.current_page,
					page_length:this.page_length,
					limit:this.limit
				},
				next:{
					page_length:this.page_length
				},
				jumper:{
					page_length:this.page_length
				},
				total:{
					total_items:this.total_items
				}
			};

			let children=this.layout.map(item=>createElement(item,{
				props:(function(){
					return map[item];
				})()
			}));

			let template=createElement('div',{
				class:{
					pagination:true
				}
			},children);

			return template;
		},
		components:{
			size:select,
			prev:{
				render:function(createElement){
					return createElement('div',{
						class:{prev:true},
						on:{
							click:this.prev
						}
					});
				},
				methods:{
					prev:function(){
						let currpage=this.$parent.current_page;
						this.$parent.current_page=currpage-1?--currpage:1;
					}
				}
			},
			pager:{
				props:{
					total_items:{
						type:Number,
						default:0
					},
					size:{
						type:Number,
						default:10
					},
					current_page:{
						type:Number,
						default:1
					},
					page_length:{
						type:Number
					},
					limit:{
						type:Number
					}
				},
				computed:{
					page:function(){
						let page=[];
						
						for(let i=0;i<this.page_length;i++){
							page.push(i+1);
						}
						return page;
					},
					display:function(){
						let param={
							left:this.limit-Math.floor(this.limit/2)-1,
							right:Math.floor(this.limit/2),
							result:this.createArray(this.limit,0)
						};

						return (this.current_page-param.left)<=0 && param.result.map((val,i)=>i+1) || (this.current_page+param.right)>this.page_length && param.result.map((val,i)=>this.page_length-i).reverse() || param.result.map((val,i)=>this.current_page-param.left+i);
					}		
				},
				render:function(createElement){
					let temp=this.display.map(function(pagenum){
						return createElement('li',{
							class:{on:pagenum===this.current_page},
							domProps:{
								innerHTML:pagenum,
							},
							attrs:{
								"data-page":pagenum
							},
							on:{
								click:this.changePage
							}
						})
					}.bind(this));

					return createElement('ul',{
						class:{pager:true}
					},temp);
				},
				methods:{
					changePage:function(eve){
						this.$parent.current_page=Number(eve.target.dataset.page);
					},
					createArray:function(len,fill){
						let array=[];
						for(let i=0;i<len;i++){
							array.push(fill)
						}
						return array;
					}
				}
			},
			next:{
				props:{
					page_length:{
						type:Number
					}
				},
				render:function(createElement){
					return createElement('div',{
						class:{next:true},
						on:{
							click:this.next
						}
					});
				},
				methods:{
					next:function(){
						let currpage=this.$parent.current_page;
						this.$parent.current_page=(currpage+1)>this.page_length?currpage:++currpage;
					}
				}
			},
			jumper:{
				props:{
					page_length:{
						type:Number
					}
				},
				render:function(createElement){
					let temp=[
						"Go to",
						createElement('input',{
							on:{
								change:this.jumpto
							}
						})
					];
					return createElement('p',{
						class:{jumper:true}
					},temp);
				},
				methods:{
					jumpto:function(eve){
						let input=Number(eve.target.value);
						
						if(input>0 && input<=this.page_length){
							this.$parent.current_page=Number(eve.target.value);
						}	
					}
				}
			},
			total:{
				props:{
					total_items:{
						type:Number
					}
				},
				render:function(createElement){
					return createElement('span',{
						class:{total:true},
						domProps:{
							innerHTML:`${1000} in Total`
						}
					});
				}
			}
		},
		created:function(){
			this.size=this.size_options[0].val;
		},
		mounted:function(){
			let index=this.layout.lastIndexOf('size');
			index>-1 && this.$children[index].$on('select:change',function(selectedItem){
				this.size=selectedItem.val;
				this.current_page=1;
			}.bind(this));
		}
	}
</script>
<style lang="scss" scoped>
	@import '../css/constants';
	@import '../css/mixins';
	.pagination{
		display:flex;
		justify-content:center;
		align-items:center;

		.prev,.next{
			@include pager-box;
		}

		.prev{
			&::before{
				content:"<"
			}
			margin-left:20px;
			border-right:0px;
		}

		.next{
			&::before{
				content:">"
			}
		}

		.pager{
			display:flex;
			justify-content:flex-start;
			align-items:center;
		}

		.total{
			margin:0px 10px;
			border:none;
			word-spacing:3px;
		}
	}
</style>

<style lang="scss">
	@import '../css/mixins';
	.pagination{
		.pager{
			li{
				@include pager-box;
				border-right:0px;
			}
			.on{
				background-color:#1c8de0;
				color:#fff;
			}
		}

		.jumper{
			input{
				@include pager-box;
				width:34px;
				outline:none;
				margin-left:10px;
				font-size:14px;
				word-spacing:3px;
				&:focus{
					border-color:#20a0ff;
				}
				cursor:auto;
			}
			margin:0px 15px;
		}
	}
</style>