// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


const bus = new Vue()
Vue.prototype.$bus = bus



import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { TableComponent, TableColumn } from 'vue-table-component';
import vueButtonEffect from 'vue-button-effect'
import Customers from '@/components/Customers'
import NavBar from '@/components/NavBar'
import Products from '@/components/Products'
import Shippers from '@/components/Shippers'
import PageThree from '@/components/PageThree'
import PageFour from '@/components/PageFour'
import PageFiveViews from '@/components/PageFiveViews'
import About from '@/components/About'

Vue.component('table-component', TableComponent);
Vue.component('table-column', TableColumn);


Vue.filter('toUSD', function (value) {
  return `$${value}`;
});

Vue.use(vueButtonEffect)

Vue.use(VueRouter)

const routes = [
  // define the root url of the application.
  { path: '/', component: Customers },
  { path: '/Customers', component: Customers },
  { path: '/NavBar', component: NavBar },
  { path: '/Products', component: Products },
  { path: '/Shippers', component: Shippers },
  { path: '/PageThree', component: PageThree },
  { path: '/PageFour', component: PageFour },
  { path: '/PageFiveViews', component: PageFiveViews },
  { path: '/About', component: About }
]

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
