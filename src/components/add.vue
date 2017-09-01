<template>
<div class="add">
	<!-- 头部 -->
	<ul class="ad_header">
		<li>取消</li>
		<li>新建日程</li>
		<li>完成</li>
	</ul>
	<!-- tab -->
	<div class="adContainer">
		<mt-navbar v-model="selectedAdd">
			<mt-tab-item id="add1">提醒</mt-tab-item>
			<mt-tab-item id="add2">待办</mt-tab-item>
			<mt-tab-item id="add3">生日</mt-tab-item>
			<mt-tab-item id="add4">纪念日</mt-tab-item>
		</mt-navbar>
	</div>
</div>
</template>

<script>
	export default {
		name: 'add',
		components:{
		},
		data () {
			return {
				selectedAdd: 'add1'
			}
		},
		methods: {
		}
	}
</script>

<style>
	.ad_header {
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
	.ad_header li {
		margin: 2rem 1rem;
		letter-spacing: 0.2rem;
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
	    border-bottom: 5px solid #e22b0a;
	    color: #e22b0a;
	}
	.adContainer .mint-tab-container-item {
	    -ms-flex-negative: 0;
	    flex-shrink: 0;
	    width: 100%;
	    background: #f0f0f0;
	    width: 100%;
		min-height: calc(100vh - 10rem);
	}
</style>
