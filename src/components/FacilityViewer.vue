<script setup lang="ts">
import { ref } from 'vue';
import RouteButton from '@/components/RouteButton.vue';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/solid';
import ArrowReturnIcon from '../components/icons/ArrowReturnIcon.vue';

const props = defineProps<{
	images: Array<string>,
	title: string
}>()

const currentIndex = ref(0);        // 目前第幾張圖片

function nextImage() {
    let currentImageLength = props.images.length;
    currentIndex.value = (currentIndex.value + 1) % currentImageLength;
}

function prevImage() {
    let currentImageLength = props.images.length;
    currentIndex.value = (currentIndex.value - 1 + currentImageLength) % currentImageLength;
}

</script>

<template>
<div class="w-full h-full relative flex flex-col">
	<div class="w-full top-container">

	</div>
	<div class="w-full middle-container flex relative">
		<TransitionGroup name="image-fade">
			<div v-for="i in [currentIndex]" :key="i" class="w-full h-full">
				<img :key="currentIndex" :src="images[currentIndex]" alt="Image" class="w-full h-full object-cover">
			</div>
		</TransitionGroup>

		<div class="absolute flex flex-row justify-center items-center button-container">
			<template v-if="images.length > 1">
				<button class="ml-3" type="button" @click="prevImage">
					<ArrowLeftIcon class="h-6 w-6 text-zinc-100" />
				</button>
				<button class="ml-3" type="button" @click="nextImage">
					<ArrowRightIcon class="h-6 w-6 text-zinc-100" />
				</button>
			</template>
		</div>
		
	</div>
		
	<div class="w-full down-container flex flex-row bg-primary-100">
		<div class="w-full h-full flex flex-row justify-start items-center pl-24">
			<div class="w-4/5 h-px bg-zinc-200 mr-6"></div>
			<RouteButton :to="{ name: '1floor' }" class="ml-4">
				<ArrowReturnIcon class="h-6 w-6 text-zinc-100"/>
			</RouteButton>
		</div>
	</div>

</div>
</template>

<style scoped>
.top-container {
	background-color: #b5b5b6;
	height: 9.91%;
}
.middle-container {
	height: 77.31%;
}
.down-container {
	height: 12.78%;
}

.button-container {
	right: 6%;
	bottom: 3%;
}
</style>