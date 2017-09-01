<template>
<div class="index">
	<div>
	<router-view></router-view></div>
	<div class="foot_tab">
		<mt-tabbar>
			<router-link to="/index/wnl" class="wnl-link">
				<mt-tab-item><img slot="icon" src="../assets/wnl1.png">万年历</mt-tab-item>
			</router-link>
			<router-link to="/index/hl" class="wnl-link">
				<mt-tab-item><img slot="icon" src="../assets/hl1.png">黄历</mt-tab-item>
			</router-link>
			<router-link to="/index/fx" class="wnl-link">
				<mt-tab-item><img slot="icon" src="../assets/fx1.png">发现</mt-tab-item>
			</router-link>
			<router-link to="/index/tx" class="wnl-link">
				<mt-tab-item><img slot="icon" src="../assets/remind1.png">提醒</mt-tab-item>
			</router-link>
			<router-link to="/index/gj" class="wnl-link">
				<mt-tab-item><img slot="icon" src="../assets/gj1.png">工具</mt-tab-item>
			</router-link>
		</mt-tabbar>
	</div>
</div>
</template>

<script>
export default {
	name: 'index'
}
</script>

<style scoped>

.foot_tab{
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1;
	width: 100%;
	height: 3rem;
	letter-spacing: 0.1rem;
}
.wnl-link{
	width: 25%;
	text-decoration: none;
	color: #8a8a8a;
}
</style>
