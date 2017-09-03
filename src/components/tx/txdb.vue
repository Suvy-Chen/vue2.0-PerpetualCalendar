<template>
<div class="txdb">
	<mt-loadmore  :bottom-method="loadBottom" ref="loadmore">
		<div class="tx2_4" v-show="tx_xl">查看已完成待办</div>
		<div class="tx2_3">
			<ul v-show="tx2_3" v-for='db in tx2_3db'>
				<li>{{ db }}</li>
			</ul>
		</div>
		<mt-button type="default" class="tx2_1" v-show="tx2_qa" @click="tx2_quicklyadd">快速添加</mt-button>
		<div class="tx2_2" v-show="tx2_2">
			<input type="text" placeholder="快速添加" v-model="tx2_add">
			<mt-button type="danger" v-if="tx2_add != ''" @click="tx2_create">创建</mt-button>
		</div>
	</mt-loadmore>
</div>
</template>

<script>
	export default {
		name: 'txdb',
		data () {
			return {
				tx2_qa: true,
				tx2_2: false,
				tx2_add: '',
				tx2_3: false,
				tx2_3db: [],
				tx_xl: true,
				page:0,
			}
		},
		methods: {
			tx2_quicklyadd: function(){
				this.tx2_qa = false;
				this.tx2_2 = true;
			},
			tx2_create: function(){
				this.tx2_qa = true;
				this.tx2_2 = false;
				this.tx2_3 = true;
				this.tx2_3db.push(this.tx2_add);
				this.tx2_add = '';
			},
			loadBottom:function() {
				if (this.page == 0) {
					this.tx_xl = true;
					this.page == 1; 
				}				
			}
		}
	}
</script>

<style scoped>
.tx2_1 {
    color: #bfbfbf;
    font-size: 0.9rem;
    background-color: #fff;
    box-shadow: 0 0 1px #b8bbbf;
    width: 99%;
}
.tx .mint-button::after {
    background-color: #fff;
    content: " ";
    opacity: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
}
.tx2_2 {
    background-color: #fff;
    box-shadow: 0 0 1px #b8bbbf;
    padding: 0.5rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    height: 1.6rem;
}
.tx2_2 input {
	width: 82%;
	color: #b8bbbf;
	margin-left: 0.4rem;
}
.tx .mint-button--danger {
    color: #ef4f4f;
    background-color: #fff;
    border: 1px solid #ef4f4f;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    height: 1.6rem;
} 
	/* 改placeholder颜色，根据不同浏览器多重设定 */
.tx2_2 input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
	color: #b8bbbf;
}
.tx2_2 input:-moz-placeholder, textarea:-moz-placeholder {
	color: #b8bbbf;
}
.tx2_2 input::-moz-placeholder, textarea::-moz-placeholder {
	color: #b8bbbf;
}
.tx2_2 input:-ms-input-placeholder, textarea:-ms-input-placeholder {
	color: #b8bbbf;
}
.tx2_3{
    background-color: #fff;
    margin: 0.5rem 0.1rem 0;
}
.tx2_3 li{
    border-bottom: 1px solid #e6e6e6;
    padding: 0.5rem;
    line-height: 1.4rem;
    font-size: 0.85rem;
}
/* 下拉 */
.tx2_4 {
	font-size: 0.8rem;
	border: 1px solid #999;
	color: #666;
	border-radius: 1rem;
	padding: 0.2rem 0.5rem;
    margin: 0.5rem auto;
    width: 6rem;
}
</style>
