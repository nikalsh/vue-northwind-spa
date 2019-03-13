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
      <table-component :data="products" sort-by="ProductID" sort-order="ProductID">
        <table-column show="ProductName" label="ProductName" :sortable="true" :filterable="true"/>
        <table-column show="CategoryID" label="CategoryID" :sortable="true" :filterable="true"/>
        <table-column show="QuantityPerUnit" label="QuantityPerUnit"/>
        <table-column show="UnitPrice" label="UnitPrice"/>
        <table-column show="UnitsInStock" label="UnitsInStock"/>
        <table-column show="UnitsOnOrder" label="UnitsOnOrder"/>
        <table-column show="ReorderLevel" label="ReorderLevel"/>
        <table-column show="Discontinued" label="Discontinued"/>
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
      console.log("we clickin' on categoryID: " + id);

      axios
        .get("api/products", { params: { table: id } })
        .then(response => {
          this.products = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<style>
#tableContainer {
}
#all {
  /* word-break:break-all; */
  border: 1px solid black;
  color: black;
}

#column {
  border: 1px solid black;
  /* position: relative;
  width: 54%;
  margin-left: auto;
  margin-right: auto; */
}

.CATcontainer {
  display: inline-block;
  border: 1px solid black;
  width: 54%;
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

.table-component {
  display: flex;
  flex-direction: column;
  /* margin: 4em 0; */
  margin: 0;
  /* background-color: white; */
}

.table-component__filter {
  align-self: flex-end;
}

.table-component__filter__field {
  padding: 0 1.25em 0 0.75em;
  height: 2.5em;
  border: solid 2px #e0e0e0;
  border-radius: 2em;
  font-size: inherit;
}

.table-component__filter__clear {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  color: #007593;
  font-weight: bold;
  cursor: pointer;
}

.table-component__filter__field:focus {
  outline: 0;
  border-color: #007593;
}

.table-component__table-wrapper {
  overflow-x: auto;
  margin: 1em 0;
  width: 100%;
  border: solid 1px #ddd;
  border-bottom: none;
}

.table-component__table {
  min-width: 100%;
  border-collapse: collapse;
  border-bottom: solid 1px #ddd;
  table-layout: fixed;
}

.table-component__table__caption {
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

.table-component__table th,
.table-component__table td {
  padding: 0.75em 1.25em;
  vertical-align: top;
  text-align: left;
}

.table-component__table th {
  background-color: #e0e0e0;
  color: #999;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 0.85em;
}

.table-component__table tbody tr:nth-child(even) {
  background-color: #f0f0f0;
}

.table-component__table a {
  color: #007593;
}

.table-component__message {
  color: #999;
  font-style: italic;
}

.table-component__th--sort,
.table-component__th--sort-asc,
.table-component__th--sort-desc {
  text-decoration: underline;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.table-component__th--sort-asc:after,
.table-component__th--sort-desc:after {
  position: absolute;
  left: 0.25em;
  display: inline-block;
  color: #bbb;
}

.table-component__th--sort-asc:after {
  content: "↑";
}

.table-component__th--sort-desc:after {
  content: "↓";
}
</style>

