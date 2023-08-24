<script setup lang="ts">
import CaseLayout2 from '@/layouts/CaseLayout2.vue';

const content = [
    new URL('@/assets/images/cases/04/01.jpg', import.meta.url).href, 
];

const thumbnails = [
    new URL('@/assets/images/cases/04/T01.jpg', import.meta.url).href, 
];

</script>

<template>
<CaseLayout2 :image-urls="content" :thumbnail-urls="thumbnails" :slogan="'潮感生活　國際式精品宅'" :main-title="'好樣'">
    走進水湳智慧城，國際級城市建設一次囊括，74 號道、中山高、中科路跨橋、中清空中匝道共構出北台中最大立體交通網，為城市注入滿滿活力。「好樣」呼應最潮未來，以國際式樣×幾何語彙 × 色塊拼貼，打造出風格獨特、個性鮮明的居所。
</CaseLayout2>
</template>

<style scoped>

</style>
