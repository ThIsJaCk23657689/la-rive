<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const mainImage = new URL('@/assets/images/floor-plans/1F.jpg', import.meta.url).href;
</script>

<template>
<FloorPlanWrapper :image-url="mainImage" :title="'1'" :is-floor="true"></FloorPlanWrapper>
</template>

<style scoped>

</style>
