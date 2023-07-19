import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ContentLayout from '../layouts/ContentLayout.vue'
import BonjourView from '../views/BonjourView.vue'
import ClaoView from '../views/ClaoView.vue'
import SalutView from '../views/SalutView.vue'
import BravoView from '../views/BravoView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/',
			component: ContentLayout,
			children: [
				{
					path: 'bonjour',
					name: 'bonjour',
					component: BonjourView,
				},
				{
					path: 'clao',
					name: 'clao',
					component: ClaoView,
				},
				{
					path: 'salut',
					name: 'salut',
					component: SalutView,
				},
				{
					path: 'Bravo',
					name: 'bravo',
					component: BravoView,
				}
			]
		}
	]
})

export default router
