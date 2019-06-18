<template>
  <div id="app">
<!--
    <img src="./assets/logo.png">
-->
<!--    <router-view name="headbar"></router-view>
    <div id="container">
    <router-view name="login" class="left"></router-view>
    <router-view name="tablebar" class="right"></router-view>
    </div>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
/*#container {
  height: 80vh;
  display: flex;
}
.left{
  flex: 7;
}
.right{
  flex: 18;

}*/
</style>
