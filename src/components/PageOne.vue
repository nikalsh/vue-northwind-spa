<template>
  <div id="about">
    <customers-list></customers-list>
  </div>

</template>

<script>
  import CustomersList from '@/components/CustomersList'
  export default {
  name: 'pageOne',
  components: {
    CustomersList
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
