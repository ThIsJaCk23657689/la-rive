<script setup lang="ts">
import ImageScaleViewer from '../components/ImageScaleViewer.vue';
const buildingImages = [
    new URL('@/assets/images/clao_main_bg_1_4k.jpg', import.meta.url).href,
    new URL('@/assets/images/clao_main_bg_2_4k.jpg', import.meta.url).href,  
    new URL('@/assets/images/clao_main_bg_3_4k.jpg', import.meta.url).href
];

</script>

<template>
    <ImageScaleViewer :image-urls="buildingImages"></ImageScaleViewer>
</template>

<style scoped>

</style>
