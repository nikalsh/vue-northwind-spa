// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
var cors = require('cors')
// require('./assets/css/main.css');
require('./assets/css/flipclock.css')

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import NavBar from '@/components/NavBar'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageThree from '@/components/PageThree'
import PageFour from '@/components/PageFour'
import PageFive from '@/components/PageFive'
import About from '@/components/About'

Vue.filter('toUSD', function (value) {
  return `$${value}`;
});

import vueButtonEffect from 'vue-button-effect'
Vue.use(vueButtonEffect)

Vue.use(VueRouter)

const routes = [
  // define the root url of the application.
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/navBar', component: NavBar },
  { path: '/PageOne', component: PageOne },
  { path: '/PageTwo', component: PageTwo },
  { path: '/PageThree', component: PageThree },
  { path: '/PageFour', component: PageFour },
  { path: '/PageFive', component: PageFive },
  { path: '/About', component: About }
]
//
//
// "CustomerID": "ALFKI",
//   "CompanyName": "Alfreds Futterkiste",
//   "ContactName": "Maria Anders",
//   "ContactTitle": "Sales Representative",
//   "Address": "Obere Str. 57",
//   "City": "Berlin",
//   "Region": null,
//   "PostalCode": "12209",
//   "Country": "Germany",
//   "Phone": "030-0074321",
//   "Fax": "030-0076545" }


const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instantiate the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
