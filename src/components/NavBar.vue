<template>
  <div class="container">
    <div class="sliding-background"></div>

    <div id="what">

      <div id = "title">NORTHWIND</div>

    </div>

    <OrderForm></OrderForm>
    <nav>
      <router-link

        v-for="routes in links"
        v-bind:key="routes.id"
        :to="`${routes.page}`"
      >
        <g-button-nuka color="primary" size="button--size-m">{{routes.text}}</g-button-nuka>
      </router-link>
    </nav>
  </div>
</template>

<script>
import OrderForm from "./OrderForm";
export default {
  name: "NavBar",

  data() {
    return {
      links: [
        {
          id: 0,
          text: "Customers",
          page: "/Customers"
        },
        {
          id: 1,
          text: "Products",
          page: "/Products"
        },
        {
          id: 2,
          text: "Shippers",
          page: "/Shippers"
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
          id: 6,
          text: "About",
          page: "/About"
        }
      ]
    };


  },

components: {
OrderForm: OrderForm
}

};
</script>
<style>
button {
}
#what {
  color: #36ad23;
  font-size: 76px;
  /* position: absolute; */
  width: 100%;
  height: 50%;

  top: -15px;
  left: 0;
}
#title{
 color: #36ad23;
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
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
}

h2 {
}
.sliding-background {
  margin: 0;
  padding: 0;
  background: url("../assets/logo.png") repeat-x;
  height: 150px;
  width: 3000px;
  animation: slide 7s linear infinite;
  z-index: -100;
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
