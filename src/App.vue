<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "app",
  components: {
    NavBar: NavBar
  }
};
</script>
<!-- styling for the component -->
<style>
#app {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  text-decoration-color: aliceblue;
  color: #2c3e50;
  /* bottom: 0; */
  /* background-color: #34495e; */
  background-color:lightgray;
  left: 0;
  right: 0;
  top: 0;
}

:root {
  background-color: lightgray;
overflow-y: scroll;

}


</style>
