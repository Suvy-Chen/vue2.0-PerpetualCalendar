<template>
<div class="wnl">
	<!-- 日历头部 -->
	<div class="month">
		<ul>
			<!--点击会触发pickpre函数，重新刷新当前日期-->
			<li>
				<img src="../../assets/mail.png" alt="">
			</li>
			<li>
				<img src="../../assets/left.png" alt="" @click="pickPre(currentYear,currentMonth)">
				<span>
					{{ currentYear }}年 {{ currentMonth }}月<img src="../../assets/unfold.png" alt="">
				</span>
				<img src="../../assets/right.png" alt="" @click="pickNext(currentYear,currentMonth)">
			</li>
			<li>
				<img src="../../assets/add.png" alt="">
			</li>
		</ul>
	</div>

	<!-- 第一层：高度固定，例手机屏幕的高度,overflow-y: hidden; -->
	<div class="bigbox" ref="BigBox">
		<!-- 第二层：高度不固定，只设宽100% -->
		<div style="width:100%;">
			<!-- 第三层：数据 -->
			<div></div>
		</div>
	</div>
	
	<!-- 日历 -->
	<Calendar></Calendar>
	<!-- 农历卡片 -->
	<div class="layer">
		<span class="w_xl">23</span>
		<ul class="w_xl2">
			<li>七月初二</li>
			<li></li>
			<li class="w_zt">周三 明天</li>
		</ul>
		<span class="w_jq">处暑</span>
		<div class="w_n">
			<span>第34周 处女座</span>
			<span class="w_n2">丁酉年 戊申月 壬午日 辛亥时〔属鸡〕</span>
			<p>
				<span class="w_yi">宜</span> 嫁娶 会亲友 出行 解除 纳采 纳财 开市 出货财 订盟 动...
			</p>
			<p>
				<span class="w_ji">忌</span> 入宅 盖屋 安葬 安门 出火
			</p>
		</div>
	</div>

	<div class="layer">
		<span class="w_xl">23</span>
		<ul class="w_xl2">
			<li>七月初二</li>
			<li></li>
			<li class="w_zt">周三 明天</li>
		</ul>
		<span class="w_jq">处暑</span>
		<div class="w_n">
			<span>第34周 处女座</span>
			<span class="w_n2">丁酉年 戊申月 壬午日 辛亥时〔属鸡〕</span>
			<p>
				<span class="w_yi">宜</span> 嫁娶 会亲友 出行 解除 纳采 纳财 开市 出货财 订盟 动...
			</p>
			<p>
				<span class="w_ji">忌</span> 入宅 盖屋 安葬 安门 出火
			</p>
		</div>
	</div>
</div>
</template>

<script>
	// 引入better-scroll组件
	import BScroll from 'better-scroll';
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
			// 初始化 berret-scroll
            _initScroll () {
                this.bigBoxScroll = new BScroll(this.$refs.BigBox, {
                    // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
                    click: true
                });
            }
		},
		created () {
            this.$nextTick(() => {
                this._initScroll();
            });
        },
	}
</script>

<style scoped>
	/* 日历头部 */
	.month {
		width: 100%;
		height: 4.5rem;
		background: #e22b0a;
	}
	.month ul {
		margin: 0;
		padding: 0;
		display: flex;  /* 弹性布局 */
		justify-content: space-around;
        /* justify-content内容对齐属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线对齐。 */
	}
	.month ul li {
		color: white;
		font-size: 1.2rem;
		letter-spacing: 0.1rem;  /* 字符间距 */
		margin-top: 1.8rem;
		line-height: 2rem;
	}
	/* 农历卡片 */
	.layer{
		width: 98%;
		margin: 1rem 0.1rem;
		padding: 0.2rem;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
		border-radius: 0.3rem;
		font-family: '华文细黑';
	}
	.w_xl{
		font-size: 5rem;
		font-weight: bolder;
		color: #d03f3f;
		float: left;
		margin: 0 1rem -0.6rem 1rem;
	}
	.w_xl2{
		float: left;
		font-size: 1.5rem;
		font-weight: bolder;
		margin-top: 1.2rem;
	}
	.w_xl2 .w_zt{
		font-size: 1.1rem;
		font-weight: bolder;
		text-align: left;
	}
	.w_jq{
		float: left;
		color: #d03f3f;
		font-size: 1.5rem;
		font-weight: bolder;
		margin: 1.2rem 0 0 0.5rem;
	}
	.w_n{
		clear: both;
		border-top: 1px solid #c0c0c4;
		padding: 0.8rem 0 0.5rem 0.3rem;
		font-weight: bolder;
	}
	.w_n .w_n2{
		color: #777777;
	}
	.w_n p{
		text-align: left;
		padding: 0.3rem 0 0 0.3rem;
		font-size: 0.95rem;
	}
	.w_n .w_yi{
		color: #35ace0;
	}
	.w_n .w_ji{
		color: #ec5252;
	}
	.bigbox{
		height: 38rem;
		overflow-y: hidden;
		margin-top: 4.5rem;
	}
</style>
