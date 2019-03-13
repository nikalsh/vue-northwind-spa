<template>
  <div id="categories">
    <div v-if="categories && categories.length">
      <div v-for="categories of categories" :key="categories.id">
        <!-- {{ categories.CategoryID }}  -->
        <!-- {{ categories.CategoryName }} -->


         <!-- {{ categories.Description }} -->
        <!-- {{categories.Picture}} -->
        <img id="pic" 
        :src="'data:image/png;base64, ' + categories.Picture" 
        :title='categories.CategoryName' 
        :alt='categories.CategoryID'
        @click="imageClicked(categories.CategoryID)">

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
    imageClicked: function(id){
      console.log("we clickin' on categoryID: " + id);
    }
  }
};
</script>

<style>

#categories{
display: inline-block;
border: 1px solid black;
width: 500px;
}

#categories img {
  border: 5px solid #2b85e4;
  border-radius: 5px;
  /* padding: 5px; */
  transition: all 0.2s ease-in-out;

}

#categories img:hover {
  transform: scale(1.1);
  /* box-shadow: 0px 0px 0px 1px #5cadff; */
}


</style>

