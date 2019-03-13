<template>
  <div id="categories">
    <div v-if="categories && categories.length">
      <div v-for="categories in categories" :key="categories.id">
        
        <img
          id="pic"
          :src="'data:image/png;base64, ' + categories.Picture"
          :title="categories.CategoryName"
          :alt="categories.CategoryID"
          @click="imageClicked(categories.CategoryID)"
        >

      </div>
    </div>

    <ul v-else-if="errors && errors.length">
      <li v-for="error of errors" :key="error.id">{{ error.message }}</li>
    </ul>
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

        axios.get("api/products", { params: { table: id }})
        .then(response => {
          // this.categories = []
          this.products = response.data;

        })
        .catch(e => {
          this.errors.push(e)
        });

    }
  }
};
</script>

<style>
#categories {
  display: inline-block;
  border: 1px solid black;
  width: 500px;
  /* float: left; */
}

#categories img {
  width: 150px;
  height: auto;
  border: 5px solid #2b85e4;
  border-radius: 5px;
  /* padding: 5px; */
  transition: all 0.2s ease-in-out;
}

#categories img:hover {
  transform: scale(1.1);
  cursor: pointer;
  /* box-shadow: 0px 0px 0px 1px #5cadff; */
}
</style>

