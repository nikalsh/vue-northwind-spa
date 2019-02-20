// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/css/main.css');

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
<<<<<<< HEAD
Vue.use(VueRouter)

import Hello from './components/HelloWorld'

import About from './components/About'  



=======
import Home from '@/components/Home'
import NavBar from '@/components/NavBar'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageThree from '@/components/PageThree'
import PageFour from '@/components/PageFour'
import PageFive from '@/components/PageFive'
import PageSix from '@/components/PageSix'
Vue.use(VueRouter)

>>>>>>> 9fb852979e4d4404a75395765dcf7819bf202e73
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
  { path: '/PageSix', component: PageSix }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
//instatinat the vnue instance
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
