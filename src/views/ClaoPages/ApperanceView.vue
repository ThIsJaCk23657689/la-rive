<script setup lang="ts">
import ImageScaleViewer from '../../components/ImageScaleViewer.vue';

const buildingImages = [
    {
        day: new URL('@/assets/images/building_day_1.gif', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1.gif', import.meta.url).href
    },
    {
        day: new URL('@/assets/images/building_day_2.gif', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1.gif', import.meta.url).href
    },
    {
        day: new URL('@/assets/images/building_day_3.gif', import.meta.url).href,
        night: new URL('@/assets/images/building_night_1.gif', import.meta.url).href
    }
];

</script>

<template>
    <ImageScaleViewer :image-urls="buildingImages"></ImageScaleViewer>
</template>

<style scoped>

</style>
