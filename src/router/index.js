// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import PageThree from '@/components/PageThree'
import PageFour from '@/components/PageFour'
import PageFive from '@/components/PageFive'
import PageSix from '@/components/PageSix'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/components',
      name: 'Home',
      component: Home
    },
    {
      path: '/components',
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/components',
      name: 'PageTwo',
      component: PageTwo
    },
    {
      path: '/components',
      name: 'PageThree',
      component: PageThree
    },
    {
      path: '/components',
      name: 'PageFour',
      component: PageFour
    },
    {
      path: '/components',
      name: 'PageFive',
      component: PageFive
    },
    {
      path: '/components',
      name: 'PageSix',
      component: PageSix
    }
  ]
})
