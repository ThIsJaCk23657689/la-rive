<script setup lang="ts">
import { ref } from 'vue';
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const currentBasement = ref(0);

const basement = [
    { title: 'B1', url: new URL('@/assets/images/floor-plans/B1.png', import.meta.url).href },
    { title: 'B2', url: new URL('@/assets/images/floor-plans/B2.png', import.meta.url).href },
    { title: 'B3', url: new URL('@/assets/images/floor-plans/B3.png', import.meta.url).href }
];

const buttons = [
    { text: 'B1', isActive: true },
    { text: 'B2', isActive: false },
    { text: 'B3', isActive: false }
];

const mainImage = new URL('@/assets/images/floor-plans/B1.png', import.meta.url).href;

function bassmentButtonClicked(index: number) {
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].isActive = false;
    }

    buttons[index].isActive = true;
    currentBasement.value = index;
    console.log('basement button clicked:' + index);
}

</script>

<template>
    <FloorPlanWrapper 
        :image-url="basement[currentBasement].url" 
        :title="'B1'" 
        :is-floor="true"
        :buttons="buttons"
        @basement-Button="bassmentButtonClicked">
    </FloorPlanWrapper>
</template>

<style scoped>

</style>
