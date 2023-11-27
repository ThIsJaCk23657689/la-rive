<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import RouteButton from '@/components/RouteButton.vue';

const mainImage = new URL('@/assets/images/floor-plans/1F.jpg', import.meta.url).href;

const spots = [
    { marker: 'A', top: 71, left: 62.65, text: '香榭大道', url: '/clao/facilities/champselysees' },
    { marker: 'B', top: 58.9, left: 44.55, text: '麗舍迎賓廳', url: '/clao/facilities/lobby' },
    { marker: 'C', top: 44.5, left: 38.3, text: '宅配室', url: '#' },
    { marker: 'D', top: 48, left: 51, text: '梯廳', url: '/clao/facilities/stair' },
    { marker: 'E', top: 30.8, left: 53.2, text: '信箱區', url: '#' },
    { marker: 'F', top: 31, left: 64, text: '人文生活沙龍', url: '/clao/facilities/lounge' },
    { marker: 'G', top: 31, left: 29.4, text: 'TEA HOUSE', url: '/clao/facilities/teahouse' },
    { marker: 'H', top: 24.4, left: 40.5, text: '資源回收區', url: '#' },
    { marker: 'I', top: 22.8, left: 72.5, text: '綠光角落', url: '#' },
    { marker: 'J', top: 31, left: 79, text: '香頌綠廊', url: '#' },
    { marker: 'K', top: 18, left: 29.5, text: '機車區', url: '#' },
    { marker: 'L', top: 49.2, left: 30.5, text: '社區車道', url: '#' },
];

</script>

<template>
<FloorPlanWrapper :image-url="mainImage" :title="'1'" :is-floor="true">

    <template v-for="(spot, index) in spots" :key="index">
        <RouteButton :to="spot.url" class="absolute flex flex-row items-center z-40" :style="{ top: `${spot.top}%`, left: `${spot.left}%` }">   
            <div v-if="spot.url != '#'" class="spot-marker animate flex justify-center items-center english-font text-white text-center">
                {{ spot.marker }}
            </div>
            <div v-else class="spot-marker flex justify-center items-center english-font text-white text-center">
                {{ spot.marker }}
            </div>
        </RouteButton>
    </template>

    <!-- <div class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-end">
        <div class="marker-container grid grid-cols-6">
            <template v-for="(spot, index) in spots" :key="index">
                <RouteButton :to="spot.url" class="mt-4 flex flex-row items-center">   
                    <div v-if="spot.url != '#'" class="spot-marker animate flex justify-center items-center english-font text-white text-center mr-2">
                        {{ spot.marker }}
                    </div>
                    <div v-else class="spot-marker flex justify-center items-center english-font text-white text-center mr-2">
                        {{ spot.marker }}
                    </div>
                    <div>
                        {{ spot.text }}
                    </div>
                </RouteButton>
            </template>
        </div>
    </div> -->

</FloorPlanWrapper>
</template>

<style scoped>
.marker-container {
    padding-bottom: 8%;
}
.spot-marker {
    padding-top: 2px;
    width: 20px;
    height: 22px;
    background-color: #036276;
}

.spot-marker.animate {
    animation: flash 0.8s infinite alternate ease-out;
}

@keyframes flash {
    from {
        background-color: #036276;
    }
    to {
        background-color: #4dbad1;
    }
}


@media (max-width: 1536px) {
    .marker-container {
        padding-bottom: 10%;
        font-size: 12px;
    }
}

</style>
