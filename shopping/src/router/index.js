import Vue from 'vue'
import VueRouter from 'vue-router'
import shopping from '../views/shopping.vue'
import entershopping from "../components/entershopping"

Vue.use(VueRouter)

  const routes = [
 
  {path:"/shopping",
  component:shopping},
     { path: '/entershopping',component: entershopping}
     

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
