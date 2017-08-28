<template>
<div class="wnl">
	<!-- 日历 -->
	<Calendar></Calendar>
	<!-- 农历卡片 -->
	<div class="layer">
		<span class="w_xl">23</span>
		<ul class="w_xl2">
			<li style="color: black;">七月初二</li>
			<li class="w_zt">周三 明天</li>
		</ul>
		<span class="w_jq">处暑</span>
		<div class="w_n">
			<span>第34周 处女座</span>
			<span style="color: #777;">丁酉年 戊申月 壬午日 辛亥时〔属鸡〕</span>
			<p>
				<span style="color: #35ace0;">宜</span> 嫁娶 会亲友 出行 解除 纳采 纳财 开市 出货财 订盟 动...
			</p>
			<p>
				<span style="color:#ec5252;">忌</span> 入宅 盖屋 安葬 安门 出火
			</p>
		</div>
	</div>
	<!-- 天气卡片 -->
	<div class="layer">
		<span class="w_tq1">08月22日</span>
		<span class="w_tq2">30°</span>
		<ul class="w_tq3">
			<li>小雨</li>
			<li class="w_tq32">28/37°</li>
			<li class="w_tq33">优36</li>
		</ul>
		<ul class="w_tq4">
			<li>广 州</li>
			<li class="w_tq42">东北风 | 温度 47%</li>
		</ul>
		<div class="w_tq5">
			<img src="../../assets/taifeng.png" alt="">
			<span>台风黄色预警</span>
			<p>黄浦区气象台发布台风黄色预警[Ⅲ级/较重]</p>
		</div>
	</div>

	<div class="layer">
		<span class="w_xl">23</span>
		<ul class="w_xl2">
			<li style="color: black;">七月初二</li>
			<li class="w_zt">周三 明天</li>
		</ul>
		<span class="w_jq">处暑</span>
		<div class="w_n">
			<span>第34周 处女座</span>
			<span style="color: #777;">丁酉年 戊申月 壬午日 辛亥时〔属鸡〕</span>
			<p>
				<span style="color: #35ace0;">宜</span> 嫁娶 会亲友 出行 解除 纳采 纳财 开市 出货财 订盟 动...
			</p>
			<p>
				<span style="color:#ec5252;">忌</span> 入宅 盖屋 安葬 安门 出火
			</p>
		</div>
	</div>
</div>
</template>

<script>
	// 引入组件
	import calendar from '@/components/wnl/calendar'   // 日历

	export default {
		name: 'wnl',
		components: {	// 引用组件
			Calendar: calendar
		},
		data () {
			return {
			}
		},
		methods: {
		}
	}
</script>

<style scoped>
	.layer{
		width: 96.5%;
		margin: 1rem 0.2rem;
		padding: 0.2rem;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
		border-radius: 0.3rem;
		position: relative;
		overflow: hidden;
	}
	/* 农历卡片 		border: 1px solid black; */
	.w_xl{
		font-size: 5rem;
		color: #d03f3f;
		float: left;
		margin: 0 1rem -0.6rem 1rem;
	}
	.w_xl2{
		float: left;
		font-size: 1.5rem;
		margin-top: 1.2rem;
	}
	.w_xl2 .w_zt{
		font-size: 1.1rem;
		text-align: left;
	}
	.w_jq{
		float: left;
		color: #d03f3f;
		font-size: 1.5rem;
		font-weight: bolder;
		margin: 1.1rem 0 0 0.5rem;
	}
	.w_n{
		clear: both;
		border-top: 1px solid #e0e0e0;
		padding: 0.8rem 0 0.5rem 0.1rem;
		color: black;
	}
	.w_n p{
		text-align: left;
		padding: 0.3rem 0 0 0.3rem;
		font-size: 0.95rem;
	}
	/* 天气卡片 */
	.w_tq1{
		position: absolute;
		right: -1rem;
		top: -0.2rem;
		background: #999;
		border-radius: 0.5rem;
		color: #fff;
		padding: 0 1rem;
		font-size: 0.1rem;
	}
	.w_tq2{
		color: #51b4de;
		font-size: 4rem;
		font-family: '华文细黑';
		float: left;
		margin-left: 1rem;
		margin-bottom: -0.5rem;
	}
	.w_tq3{
		float: left;
		font-size: 0.8rem;
		color: black;
		margin: 1rem 0 0 -2rem;
		text-align: left;
	}
	.w_tq3 .w_tq32{
		margin-top: 0.6rem;
		float: left;
	}
	.w_tq3 .w_tq33{
		float: left;
		margin: 0.5rem 0 0 0.3rem;
		padding: 0 0.1rem;
		font-size: 0.3rem;
		background: #9aee6b;
		color: #fff;
		border-radius: 0.3rem;
	}
	.w_tq4{
		float: right;
		font-size: 0.8rem;
		margin: 0.6rem 1rem 0 0;
		text-align: right;
		color: #757575;
	}
	.w_tq4 .w_tq42{
		margin-top: 0.6rem;
	}
	.w_tq5{
		border-top: 1px solid #e0e0e0;
		clear: both;
		overflow: hidden;
		font-size: 0.8rem;
		color: black;
		text-align: left;
		padding-left: 1rem;
	}
	.w_tq5 img{
		float: left;
		margin: 0.6rem 0.3rem 0.5rem 0;
	}
	.w_tq5 span{
		float: left;
		margin-top: 0.45rem;
		font-weight: bold;
	}
	.w_tq5 p{
		clear: both;
		color: #999;
		letter-spacing: 0.1rem;
	}
</style>
