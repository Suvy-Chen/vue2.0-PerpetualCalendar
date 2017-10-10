<template>
<div class="tx">
	<!-- 头部 -->
	<ul class="tx_header">
		<li><img slot="icon" src="../../assets/search.png"></li>
		<li>提醒</li>
		<li><img slot="icon" src="../../assets/add.png" @click="gotoADD"></li>
	</ul>
	<!-- 内容 -->
	<div class="tx_cont">
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
				<div class="t_none" style="min-height: calc(100vh - 26rem);" @click="gotoADD">
					<ul>
						<li><img src="../../assets/tx-bj.png" alt=""></li>
						<li>呐,啥都没有(⊙o⊙)哦！</li>
					</ul>
				</div>
				<TX></TX>
			</mt-tab-container-item>
			<!-- 待办 -->
			<mt-tab-container-item id="tx2">
				<DB></DB>
			</mt-tab-container-item>
			<!-- 生日 -->
			<mt-tab-container-item id="tx3">
				<div class="t_none" @click="gotoADD">
					<ul>
						<li><img src="../../assets/cake.png" alt="" style="width:46%"></li>
						<li>不要错过重要的日子</li>
					</ul>
				</div>
			</mt-tab-container-item>
			<!-- 纪念日 -->
			<mt-tab-container-item id="tx4">
				<div class="t_none" @click="gotoADD">
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
import txtx from "./txtx";
import txdb from "./txdb";
	export default {
		name: 'tx',
		components:{
			TX: txtx,
			DB: txdb,
		},
		data () {
			return {
				selected: '',
				name: 'tx'
			}
		},
		mounted: function(){
			this.backed()
		},
		methods: {
			gotoADD: function(){
				this.$router.push({ path:'/add' , query:{select:this.selected,name:this.name} })
			},
			/* 添加界面返回 */
            backed: function(){
            	if(this.$route.query.select == null){
            		this.selected = "tx1"
            	}else{
            		this.selected = this.$route.query.select;
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
		letter-spacing: 0.6rem;
	}
	.tx_header li:hover {
		margin: 2rem 1rem;
	}
	.tx_cont {
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
	    letter-spacing: 0.1rem;
	}
	.tx .mint-navbar .mint-tab-item {
	    padding: 0.9rem 0;
	}
	.tx .mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 6px solid #e22b0a;
	    color: #e22b0a;
	}
	.tx .mint-tab-container-item {
	    -ms-flex-negative: 0;
	    flex-shrink: 0;
	    width: 100%;
	    background: #f0f0f0;
	    width: 100%;
		min-height: calc(100vh - 10.9rem);
	}
	.t_none {
		color: #999;
		font-size: 0.9rem;
		display:flex;
		align-items:center;
		justify-content: center;
		width: 100%;
		min-height: calc(100vh - 14rem);  /* Calc: 计算容器的宽和高 */
		letter-spacing: 0.1rem;
	}
</style>
