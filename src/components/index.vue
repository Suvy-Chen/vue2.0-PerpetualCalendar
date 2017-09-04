<template>
<div class="index">
	<router-view></router-view>
	<div class="foot_tab">
		<mt-tabbar>
			<router-link to="/index/wnl" class="wnl_link">
				<mt-tab-item>
					<img slot="icon" src="../assets/wnl1.png" name="footImg" v-if="old">
					<img slot="icon" src="../assets/wnl2.png" class="show" v-if="change0"><span name="footStr">万年历</span>
				</mt-tab-item>
			</router-link>
			<router-link to="/index/hl" class="wnl_link">
				<mt-tab-item>
					<img slot="icon" src="../assets/hl1.png" name="footImg" v-if="old">
					<img slot="icon" src="../assets/hl2.png" class="show" v-if="change1"><span name="footStr">黄历</span>
				</mt-tab-item>
			</router-link>
			<router-link to="/index/fx" class="wnl_link">
				<mt-tab-item>
					<img slot="icon" src="../assets/fx1.png" name="footImg" v-if="old">
					<img slot="icon" src="../assets/fx2.png" class="show" v-if="change2"><span name="footStr">发现</span>
				</mt-tab-item>
			</router-link>
			<router-link to="/index/tx" class="wnl_link">
				<mt-tab-item>
					<img slot="icon" src="../assets/remind1.png" name="footImg" v-if="old">
					<img slot="icon" src="../assets/remind2.png" class="show" v-if="change3"><span name="footStr">提醒</span>
				</mt-tab-item>
			</router-link>
			<router-link to="/index/gj" class="wnl_link">
				<mt-tab-item>
					<img slot="icon" src="../assets/gj1.png" name="footImg" v-if="old">
					<img slot="icon" src="../assets/gj2.png" class="show" v-if="change4"><span name="footStr">工具</span>
				</mt-tab-item>
			</router-link>
		</mt-tabbar>
	</div>
</div>
</template>

<script>
export default {
	name: 'index',
	data () {
		return {
			old: true,
			change0: false,
			change1: false,
			change2: false,
			change3: false,
			change4: false,
		}
	},
	mounted: function(){
		this.choose()
	},
	methods: {
		choose: function(){
			let it = this;
			let allimg = document.getElementsByName('footImg');
			let allstr = document.getElementsByName('footStr');
			for (let i=0; i<allimg.length; i++) {
				allimg[i].onclick = function(){
					it.change0 = false;
					it.change1 = false;
					it.change2 = false;
					it.change3 = false;
					it.change4 = false;
					if(i == 0){
						it.change0 = true;
					}else if(i == 1){
						it.change1 = true;			
					}else if(i == 2){
						it.change2 = true;
					}else if(i == 3){
						it.change3 = true;
					}else if(i == 4){
						it.change4 = true;
					}
					for (let j=0; j<allstr.length; j++) {
						allstr[j].style.cssText = "color:#8a8a8a;"
						if(i == j){
							allstr[j].style.cssText = "color:#e22b0a;"
						}
					}
                }
			}
		},
	}
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
.wnl_link{
	width: 25%;
	text-decoration: none;
	color: #8a8a8a;
}
.wnl_link .show{
	position: relative;
	top: -1.5rem;
}
</style>
