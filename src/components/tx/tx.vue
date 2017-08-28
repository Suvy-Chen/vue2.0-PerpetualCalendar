<template>
<div class="tx">
	<!-- 头部 -->
	<ul class="tx_header">
		<li><img slot="icon" src="../../assets/search.png"></li>
		<li>提 醒</li>
		<li><img slot="icon" src="../../assets/add.png"></li>
	</ul>
	<!-- 内容 -->
	<div class="cont">
		<mt-navbar v-model="selected">
			<mt-tab-item id="tx1">提醒</mt-tab-item>
			<mt-tab-item id="tx2">待办</mt-tab-item>
			<mt-tab-item id="tx3">生日</mt-tab-item>
			<mt-tab-item id="tx4">纪念日</mt-tab-item>
		</mt-navbar>

		<!-- 对应选项卡内容 -->
		<mt-tab-container v-model="selected">
			<!-- 提醒 -->
			<mt-tab-container-item id="tx1">
				
			</mt-tab-container-item>
			<!-- 待办 -->
			<mt-tab-container-item id="tx2">
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
			</mt-tab-container-item>
			<!-- 生日 -->
			<mt-tab-container-item id="tx3">
				<div class="t_none">
					<ul>
						<li><img src="../../assets/cake.png" alt="" style="width:46%"></li>
						<li>不要错过重要的日子</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<!-- 纪念日 -->
			<mt-tab-container-item id="tx4">
				<div class="t_none">
					<ul>
						<li><img src="../../assets/tx-bj.png" alt=""></li>
						<li>记得一些日子,因为心里装着一些人</li>
					</ul>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</div>
</template>

<script>
	export default {
		name: 'tx',
		data () {
			return {
				selected: 'tx1',
				tx2_qa: true,
				tx2_2: false,
				tx2_add: '',
				tx2_3: false,
				tx2_3db: [],
				tx_xl: false,
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

<style>
	.tx_header {
		width: 100%;
		height: 4.5rem;
		background: #e22b0a;
		color: #FFF;
		font-size: 1.2rem;
		display: flex;  /* 弹性布局 */
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
	}
	.tx_header li {
		margin: 2rem 1rem;
	}
	.tx_header li:hover {
		margin: 2rem 1rem;
	}
	.cont {
		overflow-y: scroll; 
		position: absolute;
		top: 4.5rem;
		left: 0;
		right: 0;
		bottom: 3.5rem;
	}
	.tx .mint-tab-item-label {
	    color: inherit;
	    font-size: 0.9rem;
	}
	.tx .mint-navbar .mint-tab-item {
	    padding: 0.9rem 0;
	}
	.tx .mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 5px solid #e22b0a;
	    color: #e22b0a;
	}
	.tx .mint-tab-container-item {
	    -ms-flex-negative: 0;
	    flex-shrink: 0;
	    width: 100%;
	    background: #f6f6f6;
	    width: 100%;
		min-height: calc(100vh - 10rem);
	}
	.t_none {
		color: #999;
		font-size: 0.8rem;
		display:flex;
		align-items:center;
		justify-content: center;
		width: 100%;
		min-height: calc(100vh - 10rem);  /* Calc: 计算容器的宽和高 */
	}
	.t_none img {
		width: 36%;
		margin-top: 0.5rem;
	}
	/* 待办 */
	.tx2_1 {
	    color: #b8bbbf;
	    font-size: 0.95rem;
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
		font-size: 0.75rem;
		border: 1px solid #999;
		color: #464646;
		border-radius: 1rem;
		padding: 0.2rem 0.5rem;
	    margin: 0.5rem auto 0;
	    width: 6rem;
	}
	/* 提醒 */
</style>
