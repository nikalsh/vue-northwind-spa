<template>
  <div>
  <div id="what">
    <h2>NORTHWIND MYSQL FRONTEND</h2>
  </div>
    <nav>
        <router-link tag="button" v-for="routes in links"
                     v-bind:key="routes.id"
                     :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
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
    margin-top: 30px;
  }
  .el-button {
    font-size: 44px;
    margin-bottom: 30px;
  }
</style>
