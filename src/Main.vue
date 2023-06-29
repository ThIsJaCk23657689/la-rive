<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import screenfull from 'screenfull';

const toggleFullscreen = () => {
    if (screenfull.isEnabled) {
        screenfull.request();
    }
};

onMounted(() => {
    const fullscreenElement = document.querySelector('.fullscreen');
    fullscreenElement?.addEventListener('click', () => {
        toggleFullscreen();
    });
});

</script>

<template>
    <div class="fullscreen" @click="toggleFullscreen">
        <RouterView />
    </div>
</template>

<style scoped>
.fullscreen {
    min-width: 400px;
	min-height: 400px;
    width: 100%;
    height: 100%;
}
</style>
