<template>
  <div id="pageTwo">
    <list-customers></list-customers>
    PAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE ONE <br>
    PAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE ONE <br>
    PAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE TWOPAGE ONE <br>
  </div>
</template>

<script>
  import ListCustomers from "./ListCustomers";
  export default {
    name: 'pageTwo',
    components: {
      'ListCustomers': ListCustomers,
    }
  }
</script>
<!-- styling for the component -->
<style>
#pageTwo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #2d8cf0;
  /* border: 1px solid black; */
}
</style>
