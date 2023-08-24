<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';

const props = defineProps<{
    imageUrls: Array<string>,
    slogan: string,
    mainTitle: string,
    specialMode: boolean,
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

    <div class="card h-full flex flex-col">
        <div class="relative h-4/5 overflow-hidden">
            <Transition name="scale" appear>
                <img :src="imageUrls[currentPageIndex]" alt="" class="object-cover w-full h-full mainImage">
            </Transition>
            <Transition name="slide-fade-up" appear>
                <div v-if="!specialMode" class="bg-white absolute right-24 bottom-10 font-bold text-lg border-2 border-solid border-primary-200 text-primary-200 rounded-2xl px-8 py-2">
                    {{ slogan }}
                </div>
            </Transition>
        </div>

        <template v-if="specialMode">
            <div class="bg-primary-100 h-1/5 grid grid-cols-3">
                <div class="flex justify-center items-center">
                    <Transition name="fade" appear>
                        <RouterLink :to="{ name: 'cases-menu' }" class="text-white font-bold text-6xl">
                            {{ mainTitle }}
                        </RouterLink>
                    </Transition>
                </div>
                <div class="bg-brown-500 text-white flex justify-start items-center">
                    <Transition name="fade" appear>
                        <p class="w-4/5">
                            <slot></slot>
                        </p>
                    </Transition>
                </div>
                <div class="flex justify-center items-center">
                    <Transition name="fade" appear>
                        <div class="bg-white font-bold text-lg border-2 border-solid border-primary-200 text-primary-200 rounded-2xl px-8 py-2">
                            {{ slogan }}
                        </div>
                    </Transition>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="bg-primary-100 h-1/5 grid grid-cols-2">
                <div class="flex justify-center items-center">
                    <Transition name="fade" appear>
                        <RouterLink :to="{ name: 'cases-menu' }" class="text-white text-6xl">
                            {{ mainTitle }}
                        </RouterLink>   
                    </Transition>
                </div>
                <div class="bg-brown-500 text-white flex justify-start items-center">
                    <Transition name="fade" appear>
                        <p class="w-4/5">
                            <slot></slot>
                        </p>
                    </Transition>
                </div>
            </div>
        </template>

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
    transform: scale(1.02);
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
.slide-fade-up-enter-active,
.slide-fade-up-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
	transform: translateY(40px);
	opacity: 0;
}

/* ========================== */
.scale-enter-to, .scale-leave-from {
    transform: scale(1.02);
}
.scale-enter-active, .scale-leave-active {
    transition: all 2.0s ease-out;
}
.scale-enter-from, .scale-leave-to {
    transform: scale(1.0);
}
</style>
