<template>
  <div id="orderform">
    <!-- 
      <table>
        <tr>
         

    <div v-if="products && products.length">
       <th>Product</th>
          <th>UnitPrice</th>
      <div v-for="products in products" :key="products.ProductName">
        <tr>  
         <th><input type="text" :value = products.ProductName></th>
         <th><input type ="text" :value = products.UnitPrice> </th>
  </tr>

      </div>
    </div>
  </tr>
    </table>-->
    <div id = "productList">
    <table-component
    
      :data="products"
      sort-by="ProductName"
      sort-order="ProductName"
      :show-filter="false"
      :show-caption="false"
      filter-no-results="Add values by clicking on rows in tables below" 
      
      @rowClick="deleteRow"
    >

    <!-- :hidden="true" -->
      <table-column show="ProductID" label="ID" data-type="numeric" :sortable="true"/>
      <table-column show="ProductName" label="Product" />
      <table-column show="QuantityPerUnit" label="QuantityPerUnit"/>
      <table-column show="UnitPrice" label="Price" data-type="numeric" :sortable="true"/>
      <table-column show="UnitsInStock" label="Stock" data-type="numeric" :sortable="true" />
      <table-column show="UnitsOnOrder" label="Orderstock" data-type="numeric" :sortable="true"/>    
      <table-column show="ReorderLevel" label="ReorderLevel" data-type="numeric" :sortable="true" :hidden="true"/>
      <!-- <table-column show="Discontinued" label="Discontinued"/> -->
    </table-component>
  </div>
  </div>
</template>

<script>
export default {
  name: "orderform",
  data() {
    return {
      products: []
    };
  },
  created() {
    this.$bus.$on("product-payload", payload => {
      console.log(payload);
      this.products.push(payload);
    });
  },

  methods: {
    deleteRow: function(payload) {
      this.products.splice(payload.data.vueTableComponentInternalRowId, 1);
    }
  },
  props: {

    
  }
};
</script>
<!-- styling for the component -->
<style>

#productList {

  display: inline-block;
  text-align: center;

  width: 1000px;
}
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
