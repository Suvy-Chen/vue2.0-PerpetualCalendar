<template>
<div class="wnl">
	<!-- 头部 -->
	<div class="month">
		<ul>
			<!--点击会触发pickpre函数，重新刷新当前日期-->
			<li>
				<img src="../../assets/mail.png" alt="">
			</li>
			<li>
				<img src="../../assets/left.png" alt="" @click="pickpre(Year,Month)">
				<span>
					{{ Year }}年 {{ Month }}月<img src="../../assets/unfold.png" alt="">
				</span>
				<img src="../../assets/right.png" alt="" @click="picknext(Year,Month)">
			</li>
			<li>
				<img src="../../assets/add.png" alt="">
			</li>
		</ul>
	</div>
	<!-- 内容 -->
	<div class="cont">
		<!-- 日历 -->
		<Calendar @yearMonth="nianyue" :ym="ym" ref="rl"></Calendar>
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
			<span class="w_tq1">{{ dateYM }}</span>
			<span class="w_tq2">{{ tdTemp }}°</span>
			<ul class="w_tq3">
				<li>{{ tdWeather }}</li>
				<li class="w_tq32">{{ tdTempFrom }}°/{{ tdTempTo }}°</li>
				<li class="w_tq33">优36</li>
			</ul>
			<ul class="w_tq4">
				<li>{{ nowCity }}</li>
				<li class="w_tq42">{{ tdWind }} | 湿度{{ tdHumidity }}</li>
			</ul>
			<div class="w_tq5">
				<img src="../../assets/notice.png" alt="">
				<span>{{ tdDress }}</span>
				<p>{{ tdDressAdvice }}</p>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
	// 引入组件
	import calendar from '@/components/wnl/calendar';  // 日历
	import { api } from '../../global/api';   // 接口导入

	export default {
		name: 'wnl',
		components: {	// 引用组件
			Calendar: calendar
		},
		data () {
			return {
				Year: '',
				Month: '',
				ym: '',
				dateYM: '',
				tdTemp: '',
				tdWeather: '',
				tdTempFrom: '',
				tdTempTo: '',
				nowCity: '',
				tdWind: '',
				tdHumidity: '',
				tdDress: '',
				tdDressAdvice: ''
			}
		},
		mounted(){
			this.getData() // 应用方法，调用数据
		},
		methods: {
			nianyue(ym) {
				this.Year = ym.year;
				this.Month = ym.month;
			},
			pickpre(Year,Month) {
				this.$refs.rl.pickPre(Year,Month);
			},
			picknext(Year,Month) {
				this.$refs.rl.pickNext(Year,Month);
			},
			getData() {
				/* 获取天气数据 */
				this.$http.get(api.getWeather).then(function (response){
					let that = this;

					let sk = response.body.result.sk;
					that.tdTemp = sk.temp;
					that.tdWind = sk.wind_direction;
					that.tdHumidity = sk.humidity;

					let today = response.body.result.today;
					that.dateYM = today.date_y.substring(5);
					that.tdWeather = today.weather;
					let temp = today.temperature;
					that.tdTempFrom = temp.substring(0,temp.indexOf("℃"));
					that.tdTempTo = temp.substring(temp.indexOf("~")+1 , temp.lastIndexOf("℃"));
					that.nowCity = today.city;
					that.tdDress = today.dressing_index;
					that.tdDressAdvice = today.dressing_advice;
				}).catch(function (response){
					console.log('接口调用不成功')
				});
			},
		}
	}
</script>

<style scoped>
	/* 头及内容框 */
	.month {
		width: 100%;
		height: 4.5rem;
		background: #e22b0a;
		position: fixed;
		top: 0;
		left: 0;
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
	.cont{
		overflow-y: scroll; 
		position: absolute;
		top: 4.5rem;
		left: 0;
		right: 0;
		bottom: 3.5rem;
		opacity: 0.99999;
	}
	/* 内容 */
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
		top: -0.1rem;
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
		letter-spacing: 0.1rem;
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
