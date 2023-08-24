<script setup lang="ts">
import CaseLayout2 from '@/layouts/CaseLayout2.vue';

const content = [
    new URL('@/assets/images/cases/07/01.jpg', import.meta.url).href, 
];

const thumbnails = [
    new URL('@/assets/images/cases/06/T01.jpg', import.meta.url).href, 
];
</script>

<template>
<CaseLayout2 :image-urls="content" :thumbnail-urls="thumbnails" :slogan="'宏觀視野　東方質感宅邸'" :main-title="'居雍'">
    森綠八期首座休閒名宅「居雍天廈」，近距七期政經核心，高鐵相迎奔馳事業版圖，近G12捷運站，出則繁華相迎、入則大隱於市，展現大器宅邸居家品味。
</CaseLayout2>
</template>

<style scoped>

</style>
