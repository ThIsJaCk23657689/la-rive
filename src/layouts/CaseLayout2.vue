<script setup lang="ts">
import { ref } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import RouteButton from '@/components/RouteButton.vue';

const props = defineProps<{
    imageUrls: Array<string>,
    thumbnailUrls: Array<string>,
    slogan: string,
    mainTitle: string,
}>()

const currentPageIndex = ref(0);

function nextImage() {
    let currentImageLength = props.imageUrls.length;
    currentPageIndex.value = (currentPageIndex.value + 1) % currentImageLength;
}

function prevImage() {
    let currentImageLength = props.imageUrls.length;
    currentPageIndex.value = (currentPageIndex.value - 1 + currentImageLength) % currentImageLength;
}


</script>

<template>
<div class="w-full h-full relative">

    <template v-if="props.imageUrls.length > 1">
        <button class="w-8 border border-white rounded-full p-1 bg-black/50 text-white prev-button hover:bg-primary-100 hover:border-primary-100 transition-300-out z-20" @click="prevImage">
            <ChevronLeftIcon></ChevronLeftIcon>
        </button>

        <button class="w-8 border border-white rounded-full p-1 bg-black/50 text-white next-button hover:bg-primary-100 hover:border-primary-100 transition-300-out z-20" @click="nextImage">
            <ChevronRightIcon></ChevronRightIcon>
        </button>
    </template>

    <div class="right-area h-full bg-black/25 z-10 right-0">
        <span class="right-text english-font text-2xl text-white">PORTFOLIO</span>
    </div>

    <div class="card h-full flex flex-row">
        <div class="relative w-1/2 h-full overflow-hidden">
            <Transition name="scale" appear>
                <img :src="imageUrls[currentPageIndex]" alt="" class="object-cover w-full h-full mainImage">
            </Transition>
        </div>

        <div class="bg-primary-100 w-1/2 h-full flex flex-col justify-center items-center">

            <Transition name="slide-fade-down" appear>
                <div class="w-3/5 mb-14 overflow-hidden">
                    <img :src="thumbnailUrls[currentPageIndex]" alt="" class="object-cover w-full h-full mainImage">
                </div>
            </Transition>
            
            <Transition name="fade" appear>
                <div class="bg-white font-bold text-lg border-2 border-solid border-primary-200 text-primary-200 rounded-xl px-4 py-1 mb-16">
                    {{ slogan }}
                </div>
            </Transition>

            <Transition name="fade" appear>
                <div class="flex justify-center items-center mb-8">
                    <RouteButton :to="{ name: 'cases-menu' }" class="text-white font-bold text-6xl">
                        {{ mainTitle }}
                    </RouteButton>   
                </div>
            </Transition>

            <Transition name="fade" appear>
                <div class="bg-brown-500 text-white flex justify-center items-center">
                    <p class="w-1/2 text-center mb-12">
                        <slot></slot>
                    </p>
                </div>
            </Transition>

        </div>

    </div>
    
</div>
</template>

<style scoped>
.prev-button {
    position: absolute;
    top: 50%;
    left: 3%;
}

.next-button {
    position: absolute;
    top: 50%;
    right: 3%;
}

.right-area {
    width: 6%;
    padding: 5% 1.2%;
    position: fixed;
}

.right-text {
    writing-mode: vertical-lr;
    letter-spacing: 0.2em;
}
.mainImage {
    transform: scale(1.1);
    transition: all 2.0s ease-out;
}

.mainImage:hover {
    transform: scale(1.0);
}

/* ========================== */
.fade-enter-active, .fade-leave-active {
    transition: all 2.0s ease-out;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}


/* ========================== */
.slide-fade-down-enter-active,
.slide-fade-down-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
	transform: translateY(-50px);
	opacity: 0;
}


/* ========================== */
.scale-enter-to, .scale-leave-from {
    transform: scale(1.1);
}
.scale-enter-active, .scale-leave-active {
    transition: all 2.0s ease-out;
}
.scale-enter-from, .scale-leave-to {
    transform: scale(1.0);
}

</style>
