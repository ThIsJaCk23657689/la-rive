<script setup lang="ts">
import CaseLayout from '@/layouts/CaseLayout.vue';

const content = [
    new URL('@/assets/images/cases/07/01.png', import.meta.url).href, 
];

</script>

<template>
<CaseLayout :image-urls="content"></CaseLayout>
</template>

<style scoped>

</style>
