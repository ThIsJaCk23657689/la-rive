<script setup lang="ts">
import Menu from '../components/Menu.vue'
</script>

<template>
	<Transition name="slide-fade-right" appear>
		<div class="cube cube-1 bg-indigo-200"></div>
	</Transition>

	<Transition name="slide-fade-up" appear>
		<div class="cube cube-2"></div>
	</Transition>

	<Transition name="slide-fade-left" appear>
		<div class="cube cube-logo"></div>
	</Transition>
	
	<div class="cube cube-3-parent flex">
		<Transition name="slide-fade-left" appear>
			<div class="cube cube-3 bg-indigo-600"></div>
		</Transition>
		
		
		<div class="cube-3-side flex flex-col relative">
			<Transition name="slide-fade-right" appear>
				<div class="cube cube-4"></div>
			</Transition>
			<Transition name="slide-fade-up" appear>
				<div class="cube cube-5"></div>
			</Transition>
		</div>
	</div>

	<Transition name="slide-fade-up" appear>
		<div class="cube cube-title-b"></div>
	</Transition>

	<Transition name="slide-fade-right" appear>
		<div class="cube cube-title-text"></div>
	</Transition>

	<Transition name="slide-fade-left" appear>
		<div class="cube cube-larive-logo"></div>
	</Transition>


	<main class="h-screen grid grid-cols-5">
		<div class="col-end-6">
			<div class="h-screen grid grid-rows-5">
				<div class="row-start-2 row-span-4">
					<Menu></Menu>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped>
.slide-fade-right-enter-active {
	transition: all 2.0s ease-out;
}

.slide-fade-right-leave-active {
	transition: all 2.0s ease-out;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
	transform: translateX(-80px);
	opacity: 0;
}

/* ========================== */
.slide-fade-up-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-up-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
	transform: translateY(80px);
	opacity: 0;
}

/* ========================== */
.slide-fade-left-enter-active {
	transition: all 1.5s ease-out;
}

.slide-fade-left-leave-active {
	transition: all 1.5s ease-out;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
	transform: translateX(80px);
	opacity: 0;
}

/* ========================== */
.cube {
	position: absolute;
}

.cube-1 {
	width: 40%;
	height: 43%;
	top: 0px;
	left: 0px;
	background-image: url('@/assets/images/index_left_top_cube_bg.jpg');
	background-position: right 0px;
}

.cube-2 {
	width: 19%;
	height: 64%;
	left: 13%;
	bottom: 0px;
	background-color: #006878;
}

.cube-3-parent {
	width: 37%;
	height: 39%;
	left: 35%;
	bottom: 0px;
}

.cube-3 {
	width: 93%;
	height: 100%;
	position: relative;
	background-image: url('@/assets/images/index_middle_bottom_cube_bg.jpg');
}

.cube-3-side {
	width: 7%;
}

.cube-4 {
	width: 100%;
	height: 40%;
	position: relative;
	background-color: #b56f3b;
}

.cube-5 {
	width: 49%;
	height: 60%;
	position: absolute;
	left: -49%;
	bottom: 0px;
	background-color: #e7dbc2;
}

.cube-logo {
	left: 4%;
	top: 85%;
	width: 7%;
	height: 10%;
	background-image: url('@/assets/images/index_left_bottom_logo.png');
	background-repeat: no-repeat;
	background-size: cover;
}

.cube-title-b {
	left: 21%;
	top: 10%;
	width: 32%;
	height: 73%;
	background-image: url('@/assets/images/index_main_title_big_b.png');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: right;
}

.cube-title-text {
	left: 53%;
	top: 62%;
	width: 40%;
	height: 12%;
	background-image: url('@/assets/images/index_main_title_text.png');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: left;
}

.cube-larive-logo {
	left: 73%;
	top: 47%;
	width: 7%;
	height: 12%;
	background-image: url('@/assets/images/index_larive-logo.png');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: left;
}

</style>
