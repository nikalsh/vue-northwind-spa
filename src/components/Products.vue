<template>
  <div id="container">
    <ListCategoriesAndProducts>
  
    </ListCategoriesAndProducts>
  </div>
</template>

<script>
import ListCategoriesAndProducts from "./ListCategoriesAndProducts";
export default {
  name: "Products",
  components: {
    ListCategoriesAndProducts: ListCategoriesAndProducts
  }
};
</script>
<!-- styling for the component -->
<style>
#container {
  padding: 0;
  margin: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  /* margin-top: 60px; */
}
</style>
