<script setup lang="ts">
import ContentMenu from '../components/ContentMenu.vue'
import ImageScaleViewer from '../components/ImageScaleViewer.vue';

const buildingImages = [
    new URL('@/assets/images/clao_main_bg_1.jpg', import.meta.url).href,
    new URL('@/assets/images/clao_main_bg_2.jpg', import.meta.url).href,  
    new URL('@/assets/images/clao_main_bg_3.jpg', import.meta.url).href
];
</script>

<template>

    <div class="w-screen h-screen flex">

        <div class="relative left">
            <ContentMenu></ContentMenu>
        </div>

        <main class="h-full right">
            <ImageScaleViewer :image-urls="buildingImages"></ImageScaleViewer>
        </main>

    </div>
	
</template>

<style scoped>
.left {
    width: 26.25%;
}

.right {
    width: 73.75%;
}
</style>
