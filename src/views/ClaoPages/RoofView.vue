<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const mainImage = new URL('@/assets/images/floor-plans/R1.png', import.meta.url).href;
</script>

<template>
<FloorPlanWrapper :image-url="mainImage" :title="'R1'" :is-floor="true"></FloorPlanWrapper>
</template>

<style scoped>

</style>
