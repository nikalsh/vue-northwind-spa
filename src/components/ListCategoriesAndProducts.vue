<template>
  <div id="all">
    <div id="column">
      <div class="CATcontainer">
        <div v-if="categories && categories.length">
          <div v-for="categories in categories" :key="categories.id">
            <!-- <div class="container"> -->
            <img
              id="pic"
              :src="'data:image/png;base64, ' + categories.Picture"
              :title="categories.CategoryName"
              :alt="categories.CategoryID"
              @click="imageClicked(categories.CategoryID)"
            >
            <div class="overlay">
              <div class="text">{{categories.CategoryName}}</div>
            </div>
          </div>
        </div>
        <ul v-else-if="errors && errors.length">
          <li v-for="error of errors" :key="error.id">{{ error.message }}</li>
        </ul>
      </div>
    </div>

    <br>
    <div id="tableContainer">
      <table-component
        :data="products"
        sort-by="ProductName"
        sort-order="ProductName"
        @rowClick="handleRowClick"
        :show-filter="false"
        :show-caption="false"
        filter-no-results=" "
      >
        <table-column show="ProductName" label="ProductName" :filterable="true"/>
        <table-column show="CategoryID" label="CategoryID" data-type="numeric" :sortable="true"/>
        <table-column show="QuantityPerUnit" label="QuantityPerUnit"/>
        <table-column show="UnitPrice" label="UnitPrice" data-type="numeric" :sortable="true"/>
        <table-column
          show="UnitsInStock"
          label="UnitsInStock"
          data-type="numeric"
          :sortable="true"
        />
        <table-column
          show="UnitsOnOrder"
          label="UnitsOnOrder"
          data-type="numeric"
          :sortable="true"
        />
        <table-column
          show="ReorderLevel"
          label="ReorderLevel"
          data-type="numeric"
          :sortable="true"
        />
        <!-- <table-column show="Discontinued" label="Discontinued"/> -->
      </table-component>
    </div>
  </div>

  <!-- vue table here for products -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      products: [],
      errors: []
    };
  },
  async created() {
    axios
      .get("api/categories", { params: { table: "Category" } })
      .then(response => {
        this.categories = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
    imageClicked: function(id) {
      axios
        .get("api/products", { params: { table: id } })
        .then(response => {
          this.products = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    handleRowClick: function(payload) {
      this.$bus.$emit("product-payload", payload.data);
    }
  }
};
</script>

<style>

#all {
  /* position: relative;
  z-index: 0; */
}
#tableContainer {
}

#column {
  /* border: 1px solid black; */
  /* position: relative;
  width: 54%;
  margin-left: auto;
  margin-right: auto; */
}

.CATcontainer {
  display: inline-block;
  /* border: 1px solid black; */
  width: 57%;
  margin-left: auto;
  margin-right: auto;
  /* position: relative; */
}

#pic {
  margin-right: 2px;
  margin-left: 2px;
  float: left;
  width: 125px;
  height: auto;
  height: auto;

  border: 5px solid #2d8cf0;
  border-radius: 5px;

  display: block;

  opacity: 1;
  transition: 0.2s ease-in-out;
  backface-visibility: hidden;

  /*dark:  #2b85e4 */
  /*light: #5cadff*/
}

#pic:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.text {
  display: none;
}

#tableContainer .table-component {
  margin: 0;
}
</style>

