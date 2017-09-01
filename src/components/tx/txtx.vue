<template>
<div class="txtx">
	<p class="jqjr">近期节日</p>
	<!-- 法定节假日 -->
	<div class="jqjr1" @click="show1">

	</div>
	<div class="jqjr2" v-show="showFdjjr">
		<div>
			<ul>
				<li>国庆节</li>
				<li>10月01日</li>
			</ul>
			<span>40天后</span>
		</div>
		<div>
			<ul>
				<li>国庆节</li>
				<li>10月01日</li>
			</ul>
			<span>40天后</span>
		</div>
	</div>
	<!-- 二十四节气 -->
	<div class="jqjr1">dad</div>
	<!-- 热门节日 -->
	<div class="jqjr1">dad</div>
</div>
</template>

<script>
	export default {
		name: 'txtx',
		data () {
			return {
				showFdjjr: false,
			}
		},
		methods: {
			show1: function(){
				let that = this;
				if (that.showFdjjr == false) {
					that.showFdjjr = true;
				}else{
					that.showFdjjr = false
				};
			}
		}
	}
</script>

<style scoped>
.jqjr{
	font-size: 0.8rem;
	color: #999;
	text-align: left;
	padding: 0.5rem;
}
.jqjr1{
    height: 1.4rem;
    padding: 0.3rem;
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
    box-shadow: 0 0 2px #b8bbbf;
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
