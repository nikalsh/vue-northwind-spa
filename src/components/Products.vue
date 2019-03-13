<template>
  <div id="about">
    <list-categories>
      <!-- <div v-if="posts && posts.length">
        <div v-for="post of posts" :key="post.id">
          <g-button-nuka
            color="light-primary"
            size="button--size-s"
          >{{ post.CategoryID }},{{ post.CategoryName }},{{ post.Description }}</g-button-nuka> -->

          <!-- <img id="pic" :src= "data:image/png;base64, " + {{post.Picture}} alt = "pic"> -->
          <!--<v-btn>{{post.CategoryName}}</v-btn>-->
          <!--<v-btn>{{post.Description}}</v-btn>-->
          <!--<v-btn>{{post.Picture}}</v-btn>
          <br>-->
        <!-- </div>
      </div> -->
    </list-categories>
  </div>
</template>

<script>
import ListCategories from "./ListCategories";
export default {
  name: "pageOne",
  components: {
    ListCategories: ListCategories
  }
};
</script>
<!-- styling for the component -->
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
