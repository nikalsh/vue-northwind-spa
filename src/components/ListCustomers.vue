<template>
  <div id="about">

    <div id="customerList">

      <!--<div id="app">-->
        <!--<span>{{ price | toUSD }}</span>-->
      <!--</div>-->

      <!--<div v-if="posts && posts.length">-->
      <!--<div v-for="post of posts" v-bind:key="post.id">-->
      <!--<g-button-nuka color = "light-primary" size="button--size-s">{{post.CategoryID}},{{post.CategoryName}},{{post.Description}},{{post.Picture}}</g-button-nuka>-->
      <!--<v-btn>{{post.CategoryName}}</v-btn>-->
      <!--<v-btn>{{post.Description}}</v-btn>-->
      <!--<v-btn>{{post.Picture}}</v-btn>
      <br>-->
      <!--<g-button-nuka color = "light-primary" size="button&#45;&#45;size-s">{{post.CategoryID}},{{post.CategoryName}},{{post.Description}},{{post.Picture}}</g-button-nuka>-->

      <div v-for="post in posts" v-bind:key="posts.customerid">


        <span> {{ post | toUSD }} </span>


      <!--<div class="row"> {{ reversedMessage }} </div>-->
      <!--<div class="row"> {{ posts }} </div>-->
<!--{{ this.posts }}-->
<!--{{ reversedMessage }}-->

    </div>
    </div>
    </div>

    <!--<div v-if="posts && posts.length">-->
      <!--<div v-for="post of posts" v-bind:key="post.id">-->
          <!--<g-button-nuka color = "light-primary" size="button&#45;&#45;size-s">{{post.CategoryID}},{{post.CategoryName}},{{post.Description}},{{post.Picture}}</g-button-nuka>-->
        <!--<v-btn>{{post.CategoryName}}</v-btn>-->
        <!--<v-btn>{{post.Description}}</v-btn>-->
        <!--<v-btn>{{post.Picture}}</v-btn>
        <br>-->

    <!--<ul v-else-if="errors && errors.length">-->
      <!--<li v-for="error of errors" v-bind:key="error.id">{{error.message}}</li>-->
    <!--</ul>-->
</template>

<script>

import axios from "axios";
export default {
  name: "customerList",
  data() {
    return {
      posts: [],
      errors: []
    };
  },
  async created() {
    axios
      .get("api/customers", {params:{table: "Customers"}})
      .then(response => {
        this.posts = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
};
</script>

<style>

button{
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

