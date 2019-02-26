<template>
  <div id="about">
    <div>Powered By:</div>
    <br>
    <div id = "images">
    <img src = "../assets/logo.png" alt="vuelogo" height="100"
    style=" padding: 15px">
    <img src = "../assets/node.svg" height="100" alt="nodelogo"
    st  yle="padding-top: 25px  ">
    <img src = "../assets/mysql.png" alt="mysqllogo" height="100"
    style="padding-bottom: 15px">
    <img src = "../assets/2000px-Microsoft_Azure_Logo.svg.png" alt="myazurelogo" height="100"
    style="padding: 25px 0px">
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageSix'
}
</script>
<!-- styling for the component -->
<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  margin-top: 60px;


}

img {
  border: 1px solid black;
  padding: 5px;
}

img:hover {
transform: scale(1.1);
}

img {
  transition: all .2s ease-in-out;

}

h1 {
  /* position:relative; */
}
</style>
