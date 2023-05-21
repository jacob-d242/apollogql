import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import Students from '../views/Students.vue'
import Profile from '../views/Profiles.vue'
import HomeScreen from '../views/HomeScreen.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import activate from '../components/Activate.vue'
import Reset from '../components/Reset.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path:'/',
			component: HomeScreen
		},
		{
			path: '/dashboard',
			component: DashBoard,
			meta:{requiresAuth:true}
		},
		{
			path: '/students',
			component: Students,
			
		},
		{
			path: '/profiles',
			component: Profile,
			meta:{requiresAuth:true}
		},
		{
			path: '/register',
			component: Register
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/activate',
			component: activate,
		},
		{
			path: '/:catchAll(.*)',
			redirect: { name: 'login' }
		  },
		{
			path: '/reset',
			component: Reset
		}
	],
})
router.beforeEach((to,from,next)=>{
	if(to.matched.some(record => record.meta.requiresAuth)){
		const token =localStorage.getItem('token')
		if(!token){
			next({path:'/login'})
		}else {
			next()
		}
	}else{
		next()
	}
})

export default router