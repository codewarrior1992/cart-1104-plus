import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import( '../views/Home.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/menu',
		component: () => import('../views/Menu.vue'),
		children: [
			{
				path: '',
				name: 'MenuSort',
				component: () =>
					import('../components/client/menu/MenuSort.vue'),
			},
			{
				path: 'board',
				name: 'MenuBoard',
				component: () =>
					import('../components/client/menu/MenuBoard.vue'),
			},
			{
				path: 'section',
				name: 'MenuSection',
				component: () =>
					import('../components/client/menu/MenuSection.vue'),
			},
			{
				path: ':id',
				name: 'MenuItem',
				component: () =>
					import('../components/client/menu/MenuItem.vue'),
			},
		],
	},
	{
		path: '/blog',
		component: () => import('../views/Blog.vue'),
		children:[
			{
				path: '',
				name: 'main',
				component: () =>
					import('../components/client/blog/MainPage.vue'),
			},
			{
				path: ':id',
				name: 'sub',
				component: () =>
					import('../components/client/blog/SubPage.vue'),
			},
		]
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import( '../views/Contact.vue')
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () =>
			import('../views/Cart.vue'),
	},
	{
		path: '/payment',
		component: () => import('../views/Payment.vue'),
		children:[
			{
				path:'',
				name: 'CheckOut',
				component: () =>
					import('../components/client/payment/CheckOut.vue'),
			},
			{
				path:'done',
				name: 'Done',
				component: () =>
					import('../components/client/payment/Done.vue'),
			},
		]
	},
	{
		path: '/user',
		component: () => import('../views/User.vue'),
		children: [
			{
				path: '',
				name: 'UserAccount',
				component: () =>
					import('../components/client/user/UserAccount.vue'),
			},
			{
				path: 'photo',
				name: 'UserPhoto',
				component: () =>
					import('../components/client/user/UserPhoto.vue'),
			},
			{
				path: 'profile',
				name: 'UserProfile',
				component: () =>
					import('../components/client/user/UserProfile.vue'),
			},
		]
	},
	{
		path: '/account',
		component: () => import('../views/Account.vue'),
		children: [
			{
				path: '',
				name: 'SignIn',
				component: () =>
					import('../components/client/account/SignUp.vue'),
			},
			{
				path: 'login',
				name: 'LogIn',
				component: () =>
					import('../components/client/account/LogIn.vue'),
			},
		]
	},
]

const router = new VueRouter({
	mode:'history',
	routes
})

export default router
