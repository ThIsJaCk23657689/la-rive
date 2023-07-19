<script setup lang="ts">
import { ref } from 'vue';
import IconMagnifyingGlassPlus from '../components/icons/IconMagnifyingGlassPlus.vue';
import IconMagnifyingGlassMinus from '../components/icons/IconMagnifyingGlassMinus.vue';
import ImageModalViwer from './ImageModalViwer.vue';

const props = defineProps<{
    imageUrl: string
    spotData: Array<{
        id: number
        name: string
        top: number
        left: number,
        images: Array<string>
    }>
}>()

function ceil (value: number) {
    return Math.ceil(value);
}

const scale = ref(1);               // 初始縮放比例
const dragging = ref(false);        // 是否正在拖動
const lastMouseX = ref(0);          // 上次滑鼠 X 座標
const lastMouseY = ref(0);          // 上次滑鼠 Y 座標
const translateX = ref(0);          // X 軸位移
const translateY = ref(0);          // Y 軸位移
const showModal = ref(false);       // 是否顯示 modal
const currentSpotIndex = ref(0);    // modal 要顯示哪一個景點的照片（編號）  

function zoomIn() {
    if ( scale.value < 5.0 ) {
        scale.value *= 1.2;
    }
}

function zoomOut() {
    if ( scale.value > 1.0 ) {
        scale.value /= 1.2;
    } else {
        scale.value = 1.0;
    }
}

function startDragging(event: { preventDefault: () => void; clientX: number; clientY: number; }) {
    event.preventDefault();
    dragging.value = true;
    lastMouseX.value = event.clientX;
    lastMouseY.value = event.clientY;
}

function handleDragging(event: { clientX: number; clientY: number; }) {
    if (!dragging.value) return;

    const offsetX = (event.clientX - lastMouseX.value) / scale.value;
    const offsetY = (event.clientY - lastMouseY.value) / scale.value;
    lastMouseX.value = event.clientX;
    lastMouseY.value = event.clientY;

    translateX.value += offsetX;
    translateY.value += offsetY;
}

function stopDragging() {
    dragging.value = false;
    window.removeEventListener('wheel', handleWheel);
}

function handleMouseEnter() {
    window.addEventListener('wheel', handleWheel);
}

function handleWheel(event: WheelEvent) {
    event.preventDefault();
    const delta = Math.max( -1, Math.min( 1, event.deltaY ) );
    if ( delta > 0 ) {
        zoomOut();
    } else if ( delta < 0 ) {
        zoomIn();
    }
}

function reset() {
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
}

function popupModal(spotIndex: number) {
    showModal.value = true;
    currentSpotIndex.value = spotIndex;
}

function closeModal() {
    showModal.value = false;
}

</script>

<template>
    <div ref="imgaeContainer" class="overflow-hidden h-full relative bg-primary-300">
        <div class="w-full h-full relative" :style="{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transition: dragging ? 'none' : 'transform 0.3s ease-out'
            }"
            @mousedown="startDragging"
            @mousemove="handleDragging"
            @mouseup="stopDragging"
            @mouseleave="stopDragging"
            @mouseenter="handleMouseEnter"
            @wheel="handleWheel">
            <img :src="imageUrl" alt="Image" class="object-cover w-full h-full" />

            <template v-for="(spot, index) in spotData" :key="index">
                <button v-if="spot.images.length !== 0" class="spot transition-300-out" 
                    :style="{ top: `${spot.top}%`, left: `${spot.left}%` }"
                    @click="popupModal(index)">
                </button>
                <button v-else class="spot disable cursor-default transition-300-out" 
                    :style="{ top: `${spot.top}%`, left: `${spot.left}%` }">
                </button>
            </template>
        </div>
        <div class="control-panel">
            <div class="left-area bg-primary-100 shadow-md relative flex flex-row items-center justify-center">
                <button class="scale-button" @click="zoomIn">
                    <IconMagnifyingGlassPlus class="h-full"></IconMagnifyingGlassPlus>
                </button>
                <button class="scale-button" @click="zoomOut">
                    <IconMagnifyingGlassMinus class="h-full"></IconMagnifyingGlassMinus>
                </button>
                <div class="scale-text text-white relative cursor-pointer" @click="reset">
                    {{ ceil(scale * 100) }}%
                </div>
            </div>
        </div>
    </div>

    <ImageModalViwer v-if="showModal" 
        :images="spotData[currentSpotIndex].images" 
        :title="spotData[currentSpotIndex].name"
        @close-modal="closeModal" />

</template>

<style scoped>
.control-panel{
    position: absolute;
    width: 174px;
    height: 40px;
    bottom: 5.4%;
    right: 7.6%;
    display: flex;
    flex-direction: row;
}

.control-panel .left-area {
    border-radius: 25px 25px 25px 25px;
    width: 100%;
    height: 100%;
}

.scale-button {
    margin-right: 10px;
    height: 24px;
}

.scale-text {
    padding: 2px 9px 2px 9px;
    display: inline-block;
    font-size: 14px;
    border: 2px solid #fff;
    border-radius: 20px;
}

.spot {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #f6921e;
    border-radius: 50%;
    top: 0%;
    left: 0%;
}

.spot.disable {
    background-color: #bfbfbf;
}

.spot:not(.disable):hover {
    background-color: #f7cc99;
}

@media (max-width: 1536px) {
.spot {
    width: 20px;
    height: 20px;
}
}

</style>