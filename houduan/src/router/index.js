import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

import adlogin from "../components/adlogin.vue";
import adminpage from "../components/adminpage.vue";

  const routes = [
  {
    path: '/',
    component:adminpage,
    beforeEnter:function(to,from,next){
      // console.log(arguments)
      if(sessionStorage.getItem("nologin")){
        next()
      }else{
        next("/adlogin")
      }
    }
  },
  {path:"/adlogin",component:adlogin},
  // {
  //   path:"/signout",
  //   name:"signout",
  //   component: () =>
  //       import ('../components/adlogin.vue'),
  //   beforeEnter:function(next){
  //     console.log(arguments)
      
  //   }
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
