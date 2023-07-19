<script setup lang="ts">
import { RouterView } from 'vue-router'
import ContentMenu from '../components/ContentMenu.vue'

</script>

<template>
    <div class="w-screen h-screen flex">
        <div class="relative left shadow-lg z-10">
            <ContentMenu></ContentMenu>
        </div>

        <main class="h-full right">
            <RouterView />
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
