import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import shopping from '../views/shopping.vue'
import payfor from "../components/shop/payfor"
import entershopping from "../components/shop/entershopping"
import adlogin from "../components/adlogin.vue"
import adminpage from "../components/adminpage.vue"

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/person',
		name: 'Person',
		component: () => import('../views/person.vue')
	},
	{
		path: '/userlogin',
		name: 'Userlogin',
		component: () => import('../components/userlogin.vue')
		// redirect:''
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../components/register.vue')
	},
	{
		path: '/shopping',
		name: 'Shopping',
		component: shopping
	},
	{
		path: '/entershopping',
		component: entershopping
	},
	{
		path: '/payfor',
		component: payfor
	},
	{
		path: '/products',
		component: () => import('../views/products.vue')
	},
	{ //π‹¿Ì‘±
		path: '/admin',
		component: adminpage,
		beforeEnter: function(to, from, next) {
			// console.log(arguments)
			if (sessionStorage.getItem("nologin")) {
				next()
			} else {
				next("/adlogin")
			}
		}
	},
	{
		path: "/adlogin",
		component: adlogin
	},
]

const router = new VueRouter({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
