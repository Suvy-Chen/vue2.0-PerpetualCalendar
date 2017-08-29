<template>
<div class="hlhl">
	{{ msg }}
</div>
</template>

<script>
import { api } from '../../global/api'
export default {
	name: 'hlhl',
	data(){
		return {
			msg: "",
		}
	},
	methods:{
		getweather(){
			this.$http.get(api.getWeather).then(function (response){
				this.msg = response.body;
				console.log(response)
			}).catch(function (response){
				console.log('接口调用不成功')
			});
		},
	},
	mounted(){
		this.getweather()
	}
}
</script>

<style scoped>
</style>
