<template>
  <div id="orderform">
    <div v-if="message && message.length">
      <div v-for="message in message" :key="message.ProductName">
        <input type="text" :value = message.ProductName>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderform",

  data() {
    return {
      message: []
    };
  },
  created() {
    this.$bus.$on("product-payload", payload => {
      console.log(payload.ProductName);
      this.message.push(payload);
    });
  },

  methods: {}
};
</script>
<!-- styling for the component -->
<style>
#orderform {
  /* 
  color: white;
  font-size: 76px;
  position: absolute;
  width: 100%;
  height: 50%;

  top: -15px;
  left: 0;

  z-index: 0; */
}
</style>
