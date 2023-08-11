<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';

const props = defineProps<{
    imageUrls: Array<string>,
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
    <button class="w-8 border border-white rounded-full p-1 text-white prev-button hover:bg-primary-100 hover:border-primary-100 transition-300-out" @click="prevImage">
        <ChevronLeftIcon></ChevronLeftIcon>
    </button>

    <button class="w-8 border border-white rounded-full p-1 text-white next-button hover:bg-primary-100 hover:border-primary-100 transition-300-out" @click="nextImage">
        <ChevronRightIcon></ChevronRightIcon>
    </button>

    <RouterLink :to="{ name: 'cases-menu' }">
        <img :src="imageUrls[currentPageIndex]" alt="" class="object-cover w-full h-full">
    </RouterLink>
    
</div>
</template>

<style scoped>
.prev-button {
    position: absolute;
    top: 50%;
    left: 3%;
    z-index: 10;
}

.next-button {
    position: absolute;
    top: 50%;
    right: 3%;
    z-index: 10;
}
</style>
