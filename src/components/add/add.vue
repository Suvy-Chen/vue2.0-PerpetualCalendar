<template>
<div class="add">
	<!-- 头部 -->
	<ul class="ad_header">
		<li class="ad_header1" @click="goback">取消</li>
		<li>新建日程</li>
		<li class="ad_header1">完成</li>
	</ul>
	<!-- 内容 -->
	<div class="adContainer">
		<!-- tab -->
		<mt-navbar v-model="selectedAdd">
			<mt-tab-item id="tx1">提醒</mt-tab-item>
			<mt-tab-item id="tx2">待办</mt-tab-item>
			<mt-tab-item id="tx3">生日</mt-tab-item>
			<mt-tab-item id="tx4">纪念日</mt-tab-item>
		</mt-navbar>
		<!-- 对应选项卡内容 -->
		<mt-tab-container v-model="selectedAdd">
			<!-- 提醒 -->
			<mt-tab-container-item id="tx1">
				<adtx></adtx>
			</mt-tab-container-item>
			<!-- 待办 -->
			<mt-tab-container-item id="tx2">
				<addb></addb>
			</mt-tab-container-item>
			<!-- 生日 -->
			<mt-tab-container-item id="tx3">
				<adsr></adsr>
			</mt-tab-container-item>
			<!-- 纪念日 -->
			<mt-tab-container-item id="tx4">
				<adjn></adjn>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</div>
</template>

<script scoped>
import addtx from './addTX';
import adddb from './addDB';
import addsr from './addSR';
import addjnr from './addJNR.vue';
 	export default {
		name: 'add',
		components:{
			adtx: addtx,
			addb: adddb,
			adsr: addsr,
			adjn: addjnr,
		},
		data () {
			return {
				selectedAdd: 'tx1',
				fromName: ''
			}
		},
		mounted: function(){
			this.aDD()
		},
		methods: {
            //接收路由带过来的参数
            aDD: function(){
                this.selectedAdd = this.$route.query.select;
                this.fromName = this.$route.query.name;
            },
            goback: function(){
            	if(this.fromName == 'tx'){
            		this.$router.push({ path:'/index/tx',query:{select:this.selectedAdd}})
            	}else{
            		this.$router.push({ path:'/index/wnl' })
            	}
            }
        }
	}
</script>

<style>
	.ad_header {
		width: 100%;
		height: 4.5rem;
		background: #e22b0a;
		color: #FFF;
		font-size: 1.1rem;
		display: flex;  /* 弹性布局 */
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
	}
	.ad_header li {
		margin: 2rem 1rem;
		letter-spacing: 0.2rem;
	}
	.ad_header .ad_header1{
		font-size: 1rem;
		padding-top: 0.15rem;
	}
	.adContainer{
		position: absolute;
		top: 4.5rem;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.adContainer .mint-tab-item-label {
	    color: inherit;
	    font-size: 0.9rem;
	    letter-spacing: 0.1rem;
	}
	.adContainer .mint-navbar .mint-tab-item {
	    padding: 0.9rem 0;
	}
	.adContainer .mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 6px solid #e22b0a;
	    color: #e22b0a;
	}
	.adContainer .mint-tab-container-item {
	    -ms-flex-negative: 0;
	    flex-shrink: 0;
	    width: 100%;
	    background: #f0f0f0;
	    width: 100%;
		min-height: calc(100vh);
	}
</style>
