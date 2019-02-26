<template>

  <div>
  <div id="what">
    <h2>NORTHWIND MYSQL FRONTEND</h2>
  </div>
    <div>
    <nav>
      <v-btn-toggle>
        <router-link v-for="routes in links"
                     v-bind:key="routes.id"
                     :to="`${routes.page}`"><button :class="[$style.button, $style.buttonClose]">{{routes.text}}</button></router-link>
      </v-btn-toggle>
    </nav>
    </div>
  </div>
</template>



<script>
export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/Home'
        },
        {
          id: 1,
          text: 'Customer list',
          page: '/PageOne'
        },
        {
          id: 2,
          text: 'PageTwo',
          page: '/PageTwo'
        },
        {
          id: 3,
          text: 'PageThree',
          page: '/PageThree'
        },
        {
          id: 4,
          text: 'PageFour',
          page: '/PageFour'
        },
        {
          id: 5,
          text: 'PageFive',
          page: '/PageFive'
        }
        ,
        {
          id: 5,
          text: 'PageSix',
          page: '/PageSix'
        }
      ]
    }
  }
}
</script>
<style>
  #what {
    color: aliceblue;
    font-size: 76px;
    padding: 0;
    margin-bottom: 30px;
    position: page;
    margin-outside: 10;
  }
  button {

  }
</style>

<style module>
  .button {
    border: none;
    border-radius: 2px;
  }

  .buttonClose {
    background-color: red;
  }
</style>
