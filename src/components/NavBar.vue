<template>
  <div class="container">
    <div class="sliding-background"></div>

    <div id="what">
      <h2>NORTHWIND SPA</h2>
    </div>
    <nav>
      <router-link
        tag="button"
        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
      ><button>{{routes.text}}</button></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Home",
          page: "/Home"
        },
        {
          id: 1,
          text: "PageOne",
          page: "/PageOne"
        },
        {
          id: 2,
          text: "PageTwo",
          page: "/PageTwo"
        },
        {
          id: 3,
          text: "PageThree",
          page: "/PageThree"
        },
        {
          id: 4,
          text: "PageFour",
          page: "/PageFour"
        },
        {
          id: 5,
          text: "PageFive",
          page: "/PageFive"
        },
        {
          id: 5,
          text: "About",
          page: "/About"
        }
      ]
    };
  }
};
</script>
<style>


#what {
  color: aliceblue;
  font-size: 76px;
  position: absolute;
  width: 100%;
  height: 50%;

  top: -15px;
  left: 0;

}

nav {
  margin-top: 35px;
}
.container {
  overflow: hidden;
  position: relative;

}

h2 {

}
.sliding-background {
  background: url("../assets/logo.png") repeat-x;
  height: 185px;
  width: 3000px;
  animation: slide 7s linear infinite;
  z-index: 0;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-200px, 0, 0);
  }
}
.el-button {
  font-size: 44px;
}
</style>
