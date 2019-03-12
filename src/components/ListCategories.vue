<template>
  <div id="about">
    <div v-if="posts && posts.length">
      <div v-for="post of posts" v-bind:key="post.id">
        <g-button-nuka
          color="light-primary"
          size="button--size-s"
        >{{post.CategoryID}},{{post.CategoryName}},{{post.Description}}</g-button-nuka>

        <!-- <img id="pic" :src= "data:image/png;base64, " + {{post.Picture}} alt = "pic"> -->
        <!--<v-btn>{{post.CategoryName}}</v-btn>-->
        <!--<v-btn>{{post.Description}}</v-btn>-->
        <!--<v-btn>{{post.Picture}}</v-btn>
        <br>-->
      </div>
    </div>

    <ul v-else-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.id">{{error.message}}</li>
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
      .get("api/categories", { params: { table: "Category" } })
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

