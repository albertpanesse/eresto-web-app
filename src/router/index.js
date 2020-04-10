import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    layout: 'default-layout'
  }
]

const router = new VueRouter({
  routes: routes.map(route => ({
    path: route.path,
    name: route.name,
    component: route.component,
    beforeEnter(to, from, next) {
      store.dispatch("LayoutModule/updateLayout", route.layout)
      next()
    }
  }))
})

export default router
