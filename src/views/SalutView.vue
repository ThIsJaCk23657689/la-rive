<script setup lang="ts">
import ContentMenu from '../components/ContentMenu.vue'

</script>

<template>

    <div class="w-screen h-screen flex">

        <div class="relative left">
            <ContentMenu></ContentMenu>
        </div>

        <main class="h-full right">
            Salut
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
