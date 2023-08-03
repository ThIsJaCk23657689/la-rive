<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const mainImage = new URL('@/assets/images/floor-plans/STD.png', import.meta.url).href;
</script>

<template>
    <FloorPlanWrapper :image-url="mainImage" :title="'STD'" :is-floor="false">
        <div class="w-full h-full absolute top-0 left-0">
            <RouterLink :to="{ name: 'standard-individual', params: { type: 'A' } }" class="absolute a-part"></RouterLink>
            <RouterLink :to="{ name: 'standard-individual', params: { type: 'B' } }" class="absolute b-part"></RouterLink>
            <RouterLink :to="{ name: 'standard-individual', params: { type: 'C' } }" class="absolute c-part"></RouterLink>
            <RouterLink :to="{ name: 'standard-individual', params: { type: 'D' } }" class="absolute d-part"></RouterLink>
        </div>
    </FloorPlanWrapper>
</template>

<style scoped>
.a-part {
    width: 40%;
    height: 32%;
    top: 56%;
    left: 51%;
}

.b-part {
    width: 43%;
    height: 40%;
    top: 48%;
    left: 8%;
}

.c-part {
    width: 43%;
    height: 36%;
    top: 12%;
    left: 8%;
}

.d-part {
    width: 40%;
    height: 28%;
    top: 12%;
    left: 51%;
}
</style>
