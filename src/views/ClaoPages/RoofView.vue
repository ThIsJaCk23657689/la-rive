<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const mainImage = new URL('@/assets/images/floor-plans/R1.jpg', import.meta.url).href;

const spots = [
    { marker: 'M', text: '艾蜜莉花園' },
    { marker: 'N', text: '曬衣區' },
    { marker: 'O', text: '曬被區' },
    { marker: 'P', text: '日光廣場' },
];

</script>

<template>
<FloorPlanWrapper :image-url="mainImage" :title="'R'" :is-floor="true">
    <div class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-end">
        <div class="marker-container grid grid-cols-4">

            <!-- <template v-for="(spot, index) in spots" :key="index">
                <div class="mt-4 flex flex-row ">   
                    <div class="spot-marker english-font text-white bg-primary-100 text-center mr-2">
                        {{ spot.marker }}
                    </div>
                    <div class="pr-6 mr-2">
                        {{ spot.text }}
                    </div>
                </div>
            </template> -->

        </div>
    </div>
</FloorPlanWrapper>
</template>

<style scoped>

.marker-container {
    padding-bottom: 8%;
}
.spot-marker {
    width: 20px;
    height: 20px;
}
</style>
