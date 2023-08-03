/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					100: '#006878', // 主題綠
					200: '#b56f3b', // 主題深棕
					300: '#c4a384', // 主題淺棕
					400: '#e7dbc2', // 主題米
					500: '#112530', // 主題深黑綠（字體）
					600: '#636262', // 灰字
					700: '#d5bb5b', // 主題米黃（選單 - 建材） 
					800: '#fbfaf8', // Clao 頁面背景（幾乎白）
				},
			},
		},
	},
	plugins: [],
}

