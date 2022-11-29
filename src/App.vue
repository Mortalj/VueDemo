<template>
  <div id="app">
<!--      路由占位符  -->
    <router-view></router-view>
    <Login></Login>
  </div>
</template>

<script>
  import Login from './components/login.vue'
  export default {
    name: 'app',
    components: Login
  }
</script>

<style>
</style>
