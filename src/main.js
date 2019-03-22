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
import Products from '@/components/Products'
import Shippers from '@/components/Shippers'
import Employees from '@/components/Employees'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.component('table-component', TableComponent);
Vue.component('table-column', TableColumn);


Vue.filter('toUSD', function (value) {
  return `$${value}`;
});

Vue.use(Vuetify)
Vue.use(vueButtonEffect)

Vue.use(VueRouter)

const routes = [
  // define the root url of the application.
  { path: '/Customers', component: Customers },
  { path: '/Products', component: Products },
  { path: '/Shippers', component: Shippers },
  { path: '/Employees', component: Employees },
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
