import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import shopping from '../views/shopping.vue'

Vue.use(VueRouter)

const routes = [
	{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/person',
    name:'Person',
    component: () => import('../views/person.vue')
  },
  {
    path:'/userlogin',
    name:'Userlogin',
    component: () => import('../components/userlogin.vue')
    // redirect:''
  },
  {
    path:'/register',
    name:'Register',
    component: () => import('../components/register.vue')
  },
  {
	 path: '/shopping',
	 name: 'Shopping',
	 component: shopping
  },
  {
		path: '/products',
		component: () => import('../views/products.vue')
	},
	{
		path: '/person',
		name: 'Person',
		component: () => import('../views/person.vue')
	}
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
