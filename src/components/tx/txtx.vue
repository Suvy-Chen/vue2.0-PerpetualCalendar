<template>
<div class="txtx">
	<p class="jqjr0">近期节日</p>
	<!-- 法定节假日 -->
	<div class="jqjr1" @click="show(1)">
		<div>
			<img src="../../assets/ballon.png" alt="" class="jqjr12">法定节假日
		</div>
		<div>
			<img src="../../assets/jtx.png" alt="" v-show="showjtx1" class="jqjr11">
			<img src="../../assets/jts.png" alt="" v-show="showFdjjr" class="jqjr11">
		</div>
	</div>
	<!-- 法定节假日内容 -->
	<div class="jqjr2" v-show="showFdjjr">
		<div>
			<ul>
				<li>国庆节</li>
				<li>10月01日</li>
			</ul>
			<span>9天后</span>
		</div>
		<div>
			<ul>
				<li>中秋节</li>
				<li>10月04日</li>
			</ul>
			<span>12天后</span>
		</div>
	</div>
	<!-- 二十四节气 -->
	<div class="jqjr1" @click="show(2)">
		<div>
			<img src="../../assets/ballon.png" alt="" class="jqjr12">二十四节气
		</div>
		<div>
			<img src="../../assets/jtx.png" alt="" v-show="showjtx2" class="jqjr11">
			<img src="../../assets/jts.png" alt="" v-show="showessjq" class="jqjr11">
		</div>
	</div>
	<!-- 二十四节气内容 -->
	<div class="jqjr2" v-show="showessjq">
		<div>
			<ul>
				<li>寒露</li>
				<li>10月08日</li>
			</ul>
			<span>16天后</span>
		</div>
		<div>
			<ul>
				<li>霜降</li>
				<li>10月23日</li>
			</ul>
			<span>31天后</span>
		</div>
	</div>
	<!-- 热门节日 -->
	<div class="jqjr1" @click="show(3)">
		<div>
			<img src="../../assets/ballon.png" alt="" class="jqjr12">热门节日
		</div>
		<div>
			<img src="../../assets/jtx.png" alt="" v-show="showjtx3" class="jqjr11">
			<img src="../../assets/jts.png" alt="" v-show="showrmjr" class="jqjr11">
		</div>
	</div>
		<!-- 热门节日内容 -->
	<div class="jqjr2" v-show="showrmjr">
		<div>
			<ul>
				<li>国际聋人节</li>
				<li>09月24日</li>
			</ul>
			<span>2天后</span>
		</div>
		<div>
			<ul>
				<li>烈士纪念日</li>
				<li>09月30日</li>
			</ul>
			<span>8天后</span>
		</div>
	</div>
</div>
</template>

<script>
	export default {
		name: 'txtx',
		data () {
			return {
				showFdjjr: false,
				showessjq: false,
				showrmjr: false,
				showjtx1: true, 
				showjtx2: true,
				showjtx3: true, 
			}
		},
		methods: {
			show: function(event){
				let that = this;
				if(1 == event){
					if (that.showFdjjr == false) {
						that.showFdjjr = true;
						that.showjtx1 = false
					}else{
						that.showFdjjr = false;
						that.showjtx1 = true
					};
				}else if(2 == event){
					if (that.showessjq == false) {
						that.showessjq = true;
						that.showjtx2 = false
					}else{
						that.showessjq = false;
						that.showjtx2 = true
					};
				}else if(3 == event){
					if (that.showrmjr == false) {
						that.showrmjr = true;
						that.showjtx3 = false
					}else{
						that.showrmjr = false;
						that.showjtx3 = true
					};
				}
			}
		}
	}
</script>

<style scoped>
.jqjr0{
	font-size: 0.8rem;
	color: #999;
	text-align: left;
	padding: 0.5rem;
}
.jqjr1{
    line-height: 2.4rem;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    box-shadow: 0 0 2px #b8bbbf;
    display: flex;
 	justify-content: space-between;
 	padding: 0 0.5rem;
}
.jqjr1 .jqjr11{
	position: relative;
	top: 0.39rem;
	right: 0.5rem;
}
.jqjr1 .jqjr12{
	position: relative;
	top: 0.1rem;
	margin-right: 0.3rem;
}
.jqjr2{
	border-bottom: 0.4rem  solid #e6e6e6;
	background-color: #fff;
}
.jqjr2 div{
	border-bottom: 1px solid #e6e6e6;
	display: flex;  /* 弹性布局 */
	justify-content: space-between;
	margin: 0 0.56rem;
	padding: 0 0.6rem;
}
.jqjr2 div ul{
	color: #999;
	font-size: 0.9rem;
	padding: 0.3rem 0;
}
.jqjr2 div span{
	line-height: 3.1rem;
	font-size: 0.9rem;
	color: #000;
}
</style>
