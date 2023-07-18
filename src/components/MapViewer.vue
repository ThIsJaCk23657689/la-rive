<script setup lang="ts">
import { ref } from 'vue';
import IconMagnifyingGlassPlus from '../components/icons/IconMagnifyingGlassPlus.vue';
import IconMagnifyingGlassMinus from '../components/icons/IconMagnifyingGlassMinus.vue';

defineProps<{
    imageUrl: string
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

</script>

<template>
    <div ref="imgaeContainer" class="overflow-hidden h-full relative bg-primary-400">
        <img ref="mainImage" :src="imageUrl" alt="Image" 
            class="main-image object-cover w-full h-full" 
            :style="{
                transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
                transition: dragging ? 'none' : 'transform 0.3s ease-out'
            }"
            @mousedown="startDragging"
            @mousemove="handleDragging"
            @mouseup="stopDragging"
            @mouseleave="stopDragging"
            @mouseenter="handleMouseEnter"
            @wheel="handleWheel"
        />
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

</style>