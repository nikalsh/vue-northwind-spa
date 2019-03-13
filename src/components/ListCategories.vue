<template>
  <div id="about">
    <div v-if="categories && categories.length">
      <div v-for="categories of categories" :key="categories.id">
        {{ categories.CategoryID }},{{ categories.CategoryName }}, {{ categories.Description }}
        <!-- {{categories.Picture}} -->
        <img id="pic" :src="'data:image/png;base64, ' + categories.Picture">

        <!-- <img id="pic" :src= "data:image/png;base64, " + {{post.Picture}} alt = "pic"> -->
        <!--<v-btn>{{post.CategoryName}}</v-btn>-->
        <!--<v-btn>{{post.Description}}</v-btn>-->
        <!--<v-btn>{{post.Picture}}</v-btn>
        <br>-->
      </div>
    </div>

    <ul v-else-if="errors && errors.length">
      <li v-for="error of errors" :key="error.id">{{ error.message }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      errors: []
    };
  },
  async created() {
    axios
      .get("api/categories", { params: { table: "Category" } })
      .then(response => {
       this.categories = response.data
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
  }
};
</script>

<style>
button {
}

#about {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  margin-top: 60px;
}
</style>

