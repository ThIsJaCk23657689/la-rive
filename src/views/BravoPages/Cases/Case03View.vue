<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

const content = [
    new URL('@/assets/images/cases/03/01.png', import.meta.url).href, 
    new URL('@/assets/images/cases/03/02.png', import.meta.url).href, 
    new URL('@/assets/images/cases/03/03.png', import.meta.url).href, 
    new URL('@/assets/images/cases/03/04.png', import.meta.url).href, 
    new URL('@/assets/images/cases/03/05.png', import.meta.url).href, 
];

</script>

<template>
<CaseLayout :image-urls="content"></CaseLayout>
</template>

<style scoped>

</style>
