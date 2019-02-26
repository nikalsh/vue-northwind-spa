<template>
  <div id="about">
<div v-if="posts && posts.length">
  <div v-for="post of posts">
      <g-button-wayra>{{post.CategoryID}},{{post.CategoryName}},{{post.Description}},{{post.Picture}}</g-button-wayra>
      <!--<v-btn>{{post.CategoryName}}</v-btn>-->
      <!--<v-btn>{{post.Description}}</v-btn>-->
      <!--<v-btn>{{post.Picture}}</v-btn><br>-->
  </div>
</div>

  <ul v-else-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        posts: [],
        errors: []
      }
    },
    async created() {
      axios.get(`http://127.0.0.1:8081/api`)
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }

</script>

<style scoped>
  #about {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: aliceblue;
    margin-top: 60px;
  }
</style>

