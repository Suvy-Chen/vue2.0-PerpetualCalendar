<template>
<div class="calendar">
	<!-- 年份 月份 -->
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
	<!-- 星期 -->
	<ul class="weekdays">
		<li style="color:#e22b0a">日</li>
		<li>一</li>
		<li>二</li>
		<li>三</li>
		<li>四</li>
		<li>五</li>
		<li style="color:#e22b0a">六</li>
	</ul>
	<!-- 日期 -->
	<ul class="days">
		<!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
		<li  v-for="dayobject in days">
			<!--本月-->
			<!--如果不是本月  改变类名加灰色-->
			<span v-if="dayobject.day.getMonth()+1 != currentMonth" class="other-month">{{ dayobject.day.getDate() }}</span>
			<!--如果是本月  还需要判断是不是这一天-->
			<span v-else>
			<!--今天  同年同月同日-->
				<span v-if="dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()" class="active">{{ dayobject.day.getDate() }}</span>
				<span v-else>{{ dayobject.day.getDate() }}</span>
			</span>
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name: 'calendar',
	data () {
		return {
            currentMonth: 1,
            currentYear: 1970,
            days: []
		}
	},
	created: function() {  //在vue初始化时调用
		this.initData(null);
	},
	methods: {
		initData: function(cur) {  // cur 是日期类型
			let date;
			if (cur) {
				date = new Date(cur);
			} else {
				let now = new Date();
				date = new Date(this.formatDate(now.getFullYear() , now.getMonth()+1 , 1));
			}
			// 显示年月
			this.currentYear = date.getFullYear();
			this.currentMonth = date.getMonth() + 1;
			// 需要一个暂时固定的日期值
			let str = this.formatDate(this.currentYear , this.currentMonth , date.getDate());
			this.days.length = 0;  // 初始化本周
			// 每个月1号到上个月最后一个周日 i为当前星期数0-6
			for (let i=date.getDay() ; i>=0 ; i--) {
				let d = new Date(str);
				d.setDate(1 - i);//1-i 往前数几天
				let dayobject = {}; //用一个对象包装Date对象 
				dayobject.day = d;
				this.days.push(dayobject);//将日期放入data 中的days数组 供页面渲染使用
			}
			//获取当前月最后一天的星期数
			let str2 = this.formatDate(this.currentYear , this.currentMonth+1 , date.getDate());
			if((this.currentMonth+1)==13){
				str2 = this.formatDate(this.currentYear+1 , 1 , date.getDate());
			}
			let d2 = new Date(str2);
			d2.setDate(0)
			let num = date.getDay()+d2.getDate()+(5-d2.getDay());
			//每个月2号开始
			for (let j = 1; j <= num - date.getDay(); j++) {
				let d = new Date(str);
				d.setDate(d.getDate() + j);
				let dayobject={};
				dayobject.day=d;
				this.days.push(dayobject);
			}
			// setDate(0); 上月最后一天
            // setDate(-1); 上月倒数第二天
            // setDate(dx) 参数dx为 上月最后一天的前后dx天
		},
			// 返回 2016-01-02 格式的字符串
		formatDate: function(year,month,day){
			let y = year;
			let m = month;
			if(m<10) m = "0" + m;
			let d = day;
			if(d<10) d = "0" + d;
			return y+"-"+m+"-"+d
		},
		pickPre: function(year, month) {
			let d = new Date(this.formatDate(year , month , 1));
			let y = d.getFullYear();
			let m = d.getMonth();
			if( m == 0){
				m = 12;
				y = y-1;
			}
			this.initData(this.formatDate(y , m , 1));
		},
		pickNext: function(year, month) {
			let d = new Date(this.formatDate(year , month , 1));
			let y = d.getFullYear();
			let m = d.getMonth();
			if( m == 11){
				m = -1;
				y = y+1;
			}
			this.initData(this.formatDate(y , m+2 , 1));
		},
		pickYear: function(year, month) {
			console.log(year + "," + month);
		},
	}
}
</script>

<style scoped>
	* {
		box-sizing: border-box;
	}
	ul {
		list-style-type: none;
	}
	body {
		font-family: Verdana, sans-serif;
		background: #e22b0a;
	}
	.calendar{
		width: 100%;
		margin: 0 auto;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
	}
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
	.weekdays {
		margin: 0;
		padding: 10px 0;
		color: #9d9d9d;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.weekdays li {
		display: inline-block;
		width: 13.6%;
		text-align: center;
	}
	.days {
		padding: 0;
		background: #FFFFFF;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.days li {
		list-style-type: none;
		display: inline-block;
		width: 14.2%;
		height: 60px;
		text-align: center;
		line-height: 60px;
		font-size: 1rem;
		color: #000;
	}
	.days li .active {
		border: 0.125em solid #e22b0a;
		border-radius: 1rem;
	}
	.days li .other-month {
		padding: 5px;
		color: #e0e0e0;
	}
	.days li:hover {
		border: 0.125em solid #e22b0a;
		border-radius: 1rem;
	}
</style>
