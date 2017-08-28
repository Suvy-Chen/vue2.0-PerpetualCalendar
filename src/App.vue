<template>
  <div id="app">
    <router-view></router-view> <!-- 跳转出来的东西在此呈现 -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{padding:0; margin:0; border:0; list-style:none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
