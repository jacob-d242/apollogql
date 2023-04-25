import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import Students from '../views/Students.vue'
import Profile from '../views/Profiles.vue'
import HomeScreen from '../views/HomeScreen.vue'
import Register from '../components/Register.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path:'/',
			component: HomeScreen
		},
		{
			path: '/dashboard',
			component: DashBoard
		},
		{
			path: '/about',
			component: Students
		},
		{
			path: '/profiles',
			component: Profile
		},
		{
			path: '/register',
			component: Register
		}
	],
})

export default router