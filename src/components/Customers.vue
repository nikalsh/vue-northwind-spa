<template>
  <!--<div id="customers">-->
  <!--<list-customers></list-customers>-->
  <div id="customerListContainer">
<ListCustomers></ListCustomers>
  <!--</div>-->
  </div>
</template>

<script>
  import ListCustomers from "./ListCustomers";
  export default {
    name: 'Customers',
    components: {
      ListCustomers: ListCustomers,
    }

  }

</script>
<!-- styling for the component -->
<style>
  #customerListContainer {
    /* padding: 0;
    margin: 0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: aliceblue */
    /* margin-top: 60px; */
  }
</style>
