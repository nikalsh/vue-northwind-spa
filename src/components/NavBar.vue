<template>
  <div>
  <div id="what">
    <h2>NORTHWIND MYSQL FRONTEND</h2>
  </div>
    <nav>
        <router-link v-for="routes in links"
                     v-bind:key="routes.id"
                     :to="`${routes.page}`"><g-button-wayra color="primary" size="button--size-l">{{routes.text}}</g-button-wayra></router-link>
    </nav>
    <div class = "clockboy"></div>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      widthOfButtons: String,
      required: true
      // default: 'Lucas'
    }
  },
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
          text: 'PageOne',
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
  }
</style>
