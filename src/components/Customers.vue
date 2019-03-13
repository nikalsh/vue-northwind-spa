<template>
  <!--<div id="customers">-->
  <!--<list-customers></list-customers>-->
<ListCustomers></ListCustomers>
  <!--</div>-->
</template>

<script>
  import ListCustomers from "./ListCustomers";
  export default {
    name: 'Customers',
    components: {
      'ListCustomers': ListCustomers,
    }
  }
</script>
<!-- styling for the component -->
<style>
#shippers {
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
