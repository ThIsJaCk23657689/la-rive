<script setup lang="ts">
import MapViewer from '../components/MapViewer.vue';
const mainImage = new URL('@/assets/images/bonjour_map.jpg', import.meta.url).href;
const spotData = [
    { id: 0, name: '向上國中', top: 77.5, left: 15.3, images: [] },
    { id: 1, name: '國立臺中教育大學（英才校區）', top: 60, left: 40.3, images: [ new URL('@/assets/images/spots/01-01.jpg', import.meta.url).href ] },
    { id: 2, name: '國立臺中教育大學附設國小', top: 46, left: 41, images: [ new URL('@/assets/images/spots/02-01.jpg', import.meta.url).href ] },
    { id: 3, name: '臺灣大道', top: 15.8, left: 46.5, images: [ new URL('@/assets/images/spots/03-01.jpg', import.meta.url).href ] },
    { id: 4, name: '中華夜市', top: 29.5, left: 53.2, images: [
        new URL('@/assets/images/spots/04-01.jpg', import.meta.url).href,
        new URL('@/assets/images/spots/04-02.jpg', import.meta.url).href,
        new URL('@/assets/images/spots/04-03.jpg', import.meta.url).href
    ] },
    { id: 5, name: '臺中文學公園', top: 71.5, left: 56.5, images: [
        new URL('@/assets/images/spots/05-01.jpg', import.meta.url).href,
        new URL('@/assets/images/spots/05-02.jpg', import.meta.url).href,
        new URL('@/assets/images/spots/05-03.jpg', import.meta.url).href,
        new URL('@/assets/images/spots/05-04.jpg', import.meta.url).href
    ] },
    { id: 6, name: '第二市場站', top: 15.8, left: 64, images: [ new URL('@/assets/images/spots/06-01.jpg', import.meta.url).href ] },
    { id: 7, name: '第二市場', top: 21.8, left: 72.3, images: [
        new URL('@/assets/images/spots/07-01.jpg', import.meta.url).href,
        new URL('@/assets/images/spots/07-02.jpg', import.meta.url).href
    ] },
    { id: 8, name: '柳川水岸公園', top: 46, left: 64.2, images: [
        new URL('@/assets/images/spots/08-01.jpg', import.meta.url).href,
        new URL('@/assets/images/spots/08-02.jpg', import.meta.url).href
    ] },
    { id: 9, name: '臺中醫院', top: 54, left: 71.3, images: [] },
    { id: 10, name: '國立臺中科技大學（民生校區）', top: 61.5, left: 70.5, images: [
        new URL('@/assets/images/spots/10-01.jpg', import.meta.url).href
    ] },
    { id: 11, name: '第五市場', top: 75.5, left: 66.9, images: [] },
    { id: 12, name: '臺中州廳', top: 54, left: 78.2, images: [ new URL('@/assets/images/spots/12-01.jpg', import.meta.url).href ] },
    { id: 13, name: '臺中市役所', top: 54, left: 81.9, images: [
        new URL('@/assets/images/spots/13-01.jpg', import.meta.url).href,
        new URL('@/assets/images/spots/13-02.jpg', import.meta.url).href
    ] },
    { id: 14, name: '居仁國中', top: 61.5, left: 82.2, images: [
        new URL('@/assets/images/spots/14-01.jpg', import.meta.url).href
    ] },
];

</script>

<template>
    <MapViewer :image-url="mainImage" :spot-data="spotData"></MapViewer>
</template>

<style scoped>
</style>
