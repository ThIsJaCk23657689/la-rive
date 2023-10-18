<script setup lang="ts">
import FacilityViewer from '@/components/FacilityViewer.vue';

const facilityImages = [
    new URL('@/assets/images/facilities/teahouse_01.png', import.meta.url).href,
];

</script>

<template>
    <Transition name="fade" appear>
        <FacilityViewer :images="facilityImages" :title="'TEA HOUSE'" ></FacilityViewer>
    </Transition>
</template>

<style scoped>
</style>