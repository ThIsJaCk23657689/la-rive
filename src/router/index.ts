import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ContentLayout from '../layouts/ContentLayout.vue'
import BonjourView from '../views/BonjourView.vue'
import ClaoView from '../views/ClaoView.vue'
import SalutView from '../views/SalutView.vue'
import BravoView from '../views/BravoView.vue'

// SalutPages
import PanasonicKitchenView from '../views/SalutPages/PanasonicKitchenView.vue'
import RinnaiView from '../views/SalutPages/RinnaiView.vue'
import BoschView from '../views/SalutPages/BoschView.vue'
import PanasonicBathroomView from '../views/SalutPages/PanasonicBathroomView.vue'
import InnociView from '../views/SalutPages/InnociView.vue'
import HansgroheView from '../views/SalutPages/HansgroheView.vue'
import LifeGearView from '../views/SalutPages/LifeGearView.vue'
import WaferlockView from '../views/SalutPages/WaferlockView.vue'
import LamettkView from '../views/SalutPages/LamettkView.vue'
import DaikenView from '../views/SalutPages/DaikenView.vue'

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
					redirect: { name: 'panasonic-kitchen' },
					children: [
						{
							path: 'panasonic-kitchen',
							name: 'panasonic-kitchen',
							component: PanasonicKitchenView,
						},
						{
							path: 'rinnai',
							name: 'rinnai',
							component: RinnaiView,
						},
						{
							path: 'bosch',
							name: 'bosch',
							component: BoschView,
						},
						{
							path: 'panasonic-bathroom',
							name: 'panasonic-bathroom',
							component: PanasonicBathroomView,
						},
						{
							path: 'innoci',
							name: 'innoci',
							component: InnociView,
						},
						{
							path: 'hansgrohe',
							name: 'hansgrohe',
							component: HansgroheView,
						},
						{
							path: 'lifegear',
							name: 'lifegear',
							component: LifeGearView,
						},
						{
							path: 'waferlock',
							name: 'waferlock',
							component: WaferlockView,
						},
						{
							path: 'lamett',
							name: 'lamett',
							component: LamettkView,
						},
						{
							path: 'daiken',
							name: 'daiken',
							component: DaikenView,
						}
					]
				},
				{
					path: 'Bravo',
					name: 'bravo',
					component: BravoView,
				},

			]
		},
	]
})

export default router
