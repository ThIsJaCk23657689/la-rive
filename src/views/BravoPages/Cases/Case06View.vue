<script setup lang="ts">
import CaseLayout2 from '@/layouts/CaseLayout2.vue';

const content = [
    new URL('@/assets/images/cases/06/01.jpg', import.meta.url).href, 
];

const thumbnails = [
    new URL('@/assets/images/cases/06/T01.jpg', import.meta.url).href, 
];

</script>

<template>
<CaseLayout2 :image-urls="content" :thumbnail-urls="thumbnails" :slogan="'綠意豐繞　文化綠建築'" :main-title="'見山'">
    位於八期高綠闊市景的「見山」，營造引人入勝的自然氛圍，以山為題、景為意，希冀居住者與建築產生共鳴，享受詩詞筆下的棲居意境，感受被景致環繞、遊樂於山水間的靜謐雅緻。
</CaseLayout2>
</template>

<style scoped>

</style>
