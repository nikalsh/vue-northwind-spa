<template>
  <div id="categoriesAndProductsContainer">
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
#categoriesAndProductsContainer {

}
</style>
