<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/champselysees_01.png', import.meta.url).href,
];

</script>

<template>
    <Transition name="fade" appear>
        <FacilityViewer :images="facilityImages" :title="'香榭大道'" ></FacilityViewer>
    </Transition>
</template>

<style scoped>
</style>