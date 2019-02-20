<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  export default {
    name: 'app',
    components: {
      'NavBar': NavBar
    }
  }
</script>
<!-- styling for the component -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    text-decoration-color: aliceblue;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 60px;
    bottom: 0;
    background-color: #34495e;
    left: 0;
    position: relative;
    right: 0;
    top:0;
  }
</style>
