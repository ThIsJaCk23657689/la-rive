<script setup lang="ts">
import ContentMenu from '../components/ContentMenu.vue'
import MapViewer from '../components/MapViewer.vue';

const mainImage = new URL('@/assets/images/bonjour_map.jpg', import.meta.url).href;

</script>

<template>

    <div class="w-screen h-screen flex">

        <div class="relative left">
            <ContentMenu></ContentMenu>
        </div>

        <main class="h-full right">
            <MapViewer :image-url="mainImage"></MapViewer>
        </main>

    </div>
	
</template>

<style scoped>
.left {
    width: 26.25%;
}

.right {
    width: 73.75%;
}
</style>
