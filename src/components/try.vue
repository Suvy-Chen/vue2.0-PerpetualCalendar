<template>
<div class="index">
	<h1>{{ msg }}</h1>
	<ul>
		<li v-for="article in articles">
			{{article.title}}
		</li>
	</ul>
</div>
</template>

<script>
export default {
	name: 'index',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			articles: []
		}
	},  // https://api.douban.com/v2/movie/top250?count=250
	mounted: function() {
		this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=250', {}, {headers: {},emulateJSON: true}).then(function(response) {
			// 这里是处理正确的回调
			this.articles = response.data.subjects
			// this.articles = response.data["subjects"] 也可以
		}, function(response) {
			// 这里是处理错误的回调
			console.log(response)
		});
	}
}
</script>

<style scoped>
</style>
