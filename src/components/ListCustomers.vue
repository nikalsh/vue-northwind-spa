<template>
  <div id="about">
    <div v-if="posts && posts.length">
      <div
        v-for="post of posts"
        :key="post.id"
      >
        {{ post.CompanyName }}
      </div>
    </div>

    <ul v-else-if="errors && errors.length">
      <li
        v-for="error of errors"
        :key="error.id"
      >
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CustomerList",
  data() {
    return {
      posts: {
        CustomerID: '',
        CompanyName: '',
        ContactName: '',
        ContactTitle: '',
        Address: '',
        City: '',
        Region: '',
        PostalCode: '',
        Country: '',
        Phone: '',
        Fax: ''
      },
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
  }
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

