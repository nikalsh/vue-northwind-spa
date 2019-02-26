<template>
  <div id="about">
    <div v-if="posts && posts.length" ta>
      <div v-for="post of posts">
        <v-btn>{{post.CategoryID}}</v-btn>
        <v-btn>{{post.CategoryName}}</v-btn>
        <v-btn>{{post.Description}}</v-btn>
        <v-btn>{{post.Picture}}</v-btn>
        <br>
      </div>
    </div>

    <ul v-else-if="errors && errors.length">
      <li v-for="error of errors">{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  async created() {
    axios
      .get("api/cat", {params:{table: "Customers"}})
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style>
#about {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
  margin-top: 60px;
}
</style>

