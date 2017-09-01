<template>
<div class="hl">
	<!-- 头部 -->
	<div class="h_header">
		<span></span>
		<mt-navbar v-model="hl_selected">
			<mt-tab-item id="hl1">黄历</mt-tab-item>
			<mt-tab-item id="hl2">运势</mt-tab-item>
		</mt-navbar>
		<span><img src="../../assets/share.png" alt=""></span>
	</div>
	<!-- 内容 -->
	<div class="cont">
		<!-- 对应选项卡内容 -->
		<mt-tab-container v-model="hl_selected">
			<!-- 黄历 -->
			<mt-tab-container-item id="hl1">
				<Hlhl></Hlhl>
			</mt-tab-container-item>
			<!-- 运势 -->
			<mt-tab-container-item id="hl2">
				<Hlys></Hlys>
			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</div>
</template>

<script>
import hlhl from './hlhl';
import hlys from './hlys';

export default {
	name: 'hl',
	components: {	// 引用组件
		Hlhl: hlhl,
		Hlys: hlys
	},
	data () {
		return {
			hl_selected: 'hl1'
		}
	},
	methods: {
	}
}
</script>

<style>
	.h_header {
		width: 100%;
		height: 4.5rem;
		background: #e22b0a;
		color: #FFF;
		display: flex;  /* 弹性布局 */
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
	}
	.h_header .mint-tab-item-label {
		font-size: 1.2rem;
	}
	.h_header .mint-navbar {
		background: #e22b0a;
		letter-spacing: 0.4rem;
	}
	.h_header .mint-navbar .mint-tab-item {
	    padding: 2.05rem 0.4rem 0.5rem;
		border: 1px solid #e22b0a;
	}
	.h_header .mint-navbar .mint-tab-item.is-selected {
	    border-bottom: 6px solid #fff;
	    color: #fff;
	    margin: 0;
	}
	.h_header img{
		width: 1.6rem;
		padding: 2rem 1rem 0 0;
		margin-left: -2rem;
	}
	.cont{
		overflow-y: scroll; 
		position: absolute;
		top: 4.5rem;
		left: 0;
		right: 0;
		bottom: 3.5rem;
	}
</style>
