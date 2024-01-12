import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import ContentLayout from '@/layouts/ContentLayout.vue'
import BonjourView from '@/views/BonjourView.vue'
import ClaoView from '@/views/ClaoView.vue'
import SalutView from '@/views/SalutView.vue'
import BravoView from '@/views/BravoView.vue'

// Clao Pages 規劃
import ThreeDVideoView from '@/views/ClaoPages/ThreeDVideoView.vue'
import ApperanceView from '@/views/ClaoPages/ApperanceView.vue'
import FirstFloorView from '@/views/ClaoPages/FirstFloorView.vue'
import RoofView from '@/views/ClaoPages/RoofView.vue'
import StandardView from '@/views/ClaoPages/StandardView.vue'
import StandardIndividualView from '@/views/ClaoPages/StandardIndividualView.vue'
import BasementView from '@/views/ClaoPages/BasementView.vue'

// Facilities 公設
import FacilitiesView from '@/layouts/FacilitiesLayout.vue'
import TeaHouseView from '@/views/ClaoPages/Facilities/TeaHouseView.vue'
import StairView from '@/views/ClaoPages/Facilities/StairView.vue'
import ChampsElyseesView from '@/views/ClaoPages/Facilities/ChampsElyseesView.vue'
import LobbyView from '@/views/ClaoPages/Facilities/LobbyView.vue'
import LoungeView from '@/views/ClaoPages/Facilities/LoungeView.vue'

// Salut Pages 選材
import PanasonicKitchenView from '@/views/SalutPages/PanasonicKitchenView.vue'
import RinnaiView from '@/views/SalutPages/RinnaiView.vue'
import BoschView from '@/views/SalutPages/BoschView.vue'
import PanasonicBathroomView from '@/views/SalutPages/PanasonicBathroomView.vue'
import InnociView from '@/views/SalutPages/InnociView.vue'
import HansgroheView from '@/views/SalutPages/HansgroheView.vue'
import LifeGearView from '@/views/SalutPages/LifeGearView.vue'
import SecurityView from '@/views/SalutPages/SecurityView.vue'
import WaferlockView from '@/views/SalutPages/WaferlockView.vue'
import LamettkView from '@/views/SalutPages/LamettkView.vue'
import DaikenView from '@/views/SalutPages/DaikenView.vue'
import ElectricCarView from '@/views/SalutPages/ElectricCarView.vue'

// Bravo Pages 業績實景
import AboutUsView from '@/views/BravoPages/AboutUsView.vue'
import TeamsView from '@/views/BravoPages/Teams/TeamsView.vue'
import ChenView from '@/views/BravoPages/Teams/ChenView.vue'
import TsaiView from '@/views/BravoPages/Teams/TsaiView.vue'
import CasesView from '@/views/BravoPages/Cases/CasesView.vue'
import Case01View from '@/views/BravoPages/Cases/Case01View.vue'
import Case02View from '@/views/BravoPages/Cases/Case02View.vue'
import Case03View from '@/views/BravoPages/Cases/Case03View.vue'
import Case04View from '@/views/BravoPages/Cases/Case04View.vue'
import Case05View from '@/views/BravoPages/Cases/Case05View.vue'
import Case06View from '@/views/BravoPages/Cases/Case06View.vue'
import Case07View from '@/views/BravoPages/Cases/Case07View.vue'

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
					redirect: { name: 'apperance' },
					children: [
						{
							path: '3Dvideo',
							name: '3Dvideo',
							component: ThreeDVideoView,
						},
						{
							path: 'apperance',
							name: 'apperance',
							component: ApperanceView,
						},
						{
							path: '1floor',
							name: '1floor',
							component: FirstFloorView,
						},
						{
							path: 'roof',
							name: 'roof',
							component: RoofView,
						},
						{
							path: 'standard',
							name: 'standard',
							component: StandardView,
						},
						{
							path: 'standardindividual/:type?',
							name: 'standardindividual',
							component: StandardIndividualView,
							props: true,
						},
						{
							path: 'basement',
							name: 'basement',
							component: BasementView,
						},
						{
							path: 'facilities',
							name: 'facilities',
							component: FacilitiesView,
							redirect: { name: 'frontdoor' },
							children: [
								{
									path: 'teahouse',
									name: 'teahouse',
									component: TeaHouseView,
								},
								{
									path: 'stair',
									name: 'stair',
									component: StairView,
								},
								{
									path: 'champselysees',
									name: 'champselysees',
									component: ChampsElyseesView, 
								},
								{
									path: 'lobby',
									name: 'lobby',
									component: LobbyView,
								},
								{
									path: 'lounge',
									name: 'lounge',
									component: LoungeView,
								},
							]
						}
					]
				},
				{
					path: 'salut',
					name: 'salut',
					component: SalutView,
					redirect: { name: 'panasonickitchen' },
					children: [
						{
							path: 'panasonickitchen',
							name: 'panasonickitchen',
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
							path: 'panasonicbathroom',
							name: 'panasonicbathroom',
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
							path: 'security',
							name: 'security',
							component: SecurityView,
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
						},
						{
							path: 'electriccar',
							name: 'electriccar',
							component: ElectricCarView,
						}
					]
				},
				{
					path: 'bravo',
					name: 'bravo',
					component: BravoView,
					redirect: { name: 'aboutus' },
					children: [
						{
							path: 'aboutus',
							name: 'aboutus',
							component: AboutUsView,
						},
						{
							path: 'teams',
							name: 'teams',
							redirect: { name: 'teams-menu' },
							children: [
								{
									path: 'menu',
									name: 'teams-menu',
									component: TeamsView,
								},
								{
									path: 'chen',
									name: 'teams-chen',
									component: ChenView,
								},
								{
									path: 'tsai',
									name: 'teams-tsai',
									component: TsaiView,
								},
							]
						},
						{
							path: 'cases',
							name: 'cases',
							redirect: { name: 'cases-menu' },
							children: [
								{
									path: 'menu',
									name: 'cases-menu',
									component: CasesView,
								},
								// {
								// 	path: 'case01',
								// 	name: 'cases-case01',
								// 	component: Case01View,
								// },
								// {
								// 	path: 'case02',
								// 	name: 'cases-case02',
								// 	component: Case02View,
								// },
								{
									path: 'case03',
									name: 'cases-case03',
									component: Case03View,
								},
								{
									path: 'case04',
									name: 'cases-case04',
									component: Case04View,
								},
								{
									path: 'case05',
									name: 'cases-case05',
									component: Case05View,
								},
								{
									path: 'case06',
									name: 'cases-case06',
									component: Case06View,
								},
								{
									path: 'case07',
									name: 'cases-case07',
									component: Case07View,
								},
							]
						},
					]
				},

			]
		},
	]
})

export default router
