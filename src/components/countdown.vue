<template>
<div class="cd">
	<img src="../assets/djsbg.jpg" alt="">
	<mt-badge color="#888" class="cd1">
		<span>{{time}}</span>s 后跳过
	</mt-badge>
</div>
</template>

<script>
export default {
	name: 'cd',
	data () {
		return {
			time: 3,
		}
	},
	mounted: function(){
		this.send()
	},
	methods: {
		send() {
			let me = this;
			let interval = window.setInterval(function() {
				if ((me.time--) <= 0) {
					me.time = 3;  // 递减至0后重设time默认值
					window.clearInterval(interval);
					me.$router.push({ path: '/index/wnl' })
				}
			}, 1000);
		}
	}
}
</script>

<style scoped>
	img{
		width: 100%;
		height: 100%;
	}
	.cd1{
		position: absolute;
		right: 6%;
		bottom: 16%;
		padding: 0.125em 1em;
	}
</style>
