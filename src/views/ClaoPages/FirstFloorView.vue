<script setup lang="ts">
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';

const mainImage = new URL('@/assets/images/floor-plans/1F.jpg', import.meta.url).href;

const spots = [
    { marker: 'A', text: '香榭大道' },
    { marker: 'B', text: '麗舍迎賓廳' },
    { marker: 'C', text: '宅配室' },
    { marker: 'D', text: '梯廳' },
    { marker: 'E', text: '信箱區' },
    { marker: 'F', text: '人文生活沙龍' },
    { marker: 'G', text: 'TEA HOUSE' },
    { marker: 'H', text: '資源回收區' },
    { marker: 'I', text: '綠光角落' },
    { marker: 'J', text: '香頌綠廊' },
    { marker: 'K', text: '機車區' },
    { marker: 'L', text: '社區車道' },
];

</script>

<template>
<FloorPlanWrapper :image-url="mainImage" :title="'1'" :is-floor="true">
    <div class="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-end">
        <div class="marker-container grid grid-cols-6">

            <template v-for="(spot, index) in spots" :key="index">
                <div class="mt-4 flex flex-row">   
                    <div class="spot-marker english-font text-white bg-primary-100 text-center mr-2">
                        {{ spot.marker }}
                    </div>
                    <div>
                        {{ spot.text }}
                    </div>
                </div>
            </template>

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
