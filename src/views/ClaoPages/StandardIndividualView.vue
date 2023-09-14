<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import FloorPlanWrapper from '@/layouts/FloorPlanWrapper.vue';
import RouteButton from '@/components/RouteButton.vue';

const props = defineProps(['type']);

const currentType = ref(0);
const standards = [
    { 
        title: 'A', 
        url: new URL('@/assets/images/floor-plans/A.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/A.png', import.meta.url).href 
    },
    { 
        title: 'B', 
        url: new URL('@/assets/images/floor-plans/B.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/B.png', import.meta.url).href 
    },
    { 
        title: 'C', 
        url: new URL('@/assets/images/floor-plans/C.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/C.png', import.meta.url).href 
    },
    { 
        title: 'D', 
        url: new URL('@/assets/images/floor-plans/D.png', import.meta.url).href, 
        buttonImg: new URL('@/assets/images/floor-plans/buttons/D.png', import.meta.url).href 
    }
];

function updateCurrentType() {
    if (props.type === '') {
        currentType.value = 0;
    } else if (props.type === 'A') {
        currentType.value = 0;
    } else if (props.type === 'B') {
        currentType.value = 1;
    } else if (props.type === 'C') {
        currentType.value = 2;
    } else if (props.type === 'D') {
        currentType.value = 3;
    }
}

onMounted(() => {
    updateCurrentType();
})

watch(() => props.type, () => {
    updateCurrentType();
});

</script>

<template>
    <FloorPlanWrapper :image-url="standards[currentType].url" :title="standards[currentType].title" :is-floor="false">

        <template v-slot:fixed>
            <div class="little-plan-container">
                <img :src="standards[currentType].buttonImg" alt="Image" class="object-cover little-plan" />
                
                <RouteButton :to="{ name: 'standardindividual', params: { type: 'A' } }" class="absolute a-part"></RouteButton>
                <RouteButton :to="{ name: 'standardindividual', params: { type: 'B' } }" class="absolute b-part"></RouteButton>
                <RouteButton :to="{ name: 'standardindividual', params: { type: 'C' } }" class="absolute c-part"></RouteButton>
                <RouteButton :to="{ name: 'standardindividual', params: { type: 'D' } }" class="absolute d-part"></RouteButton>
            </div>
        </template>

        
    </FloorPlanWrapper>
</template>

<style scoped>
.little-plan-container {
    position: absolute;
    bottom: 5%;
    right: 8%;
}

.a-part {
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
}
.b-part {
    width: 50%;
    height: 50%;
    top: 50%;
    left: 0%;
}
.c-part {
    width: 50%;
    height: 50%;
    top: 0%;
    left: 0%;
}
.d-part {
    width: 50%;
    height: 50%;
    top: 0%;
    left: 50%;
}
</style>
