<template>
  <div id="about">
    <list-categories></list-categories>
  </div>

</template>

<script>
  import ListCategories from "./ListCategories";
  export default {
    name: 'pageOne',
    components: {
      'ListCategories': ListCategories,
    }
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
</style>
