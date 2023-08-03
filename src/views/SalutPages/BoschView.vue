<script setup lang="ts">
import SalutWrapper from '@/layouts/SalutWrapper.vue'
import Page01View from './Bosch/Page01.vue'
import Page02View from './Bosch/Page02.vue'
import Page03View from './Bosch/Page03.vue'

const pages = [
    Page01View,
    Page02View,
    Page03View
];

const buttons = [
    {
        text: "頂級洗淨技術",
        start: 0,
        end: 2
    },
    {
        text: "樣品屋",
        start: 3,
        end: 3
    },
];

const logo = new URL('@/assets/images/salut/logos/Bosch.png', import.meta.url).href;
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons" :logo="logo">
    <template v-slot:header>
        <div class="text-white text-xl tracking-wide mr-10">科技成就生活之美</div>
    </template>
</SalutWrapper>
</template>

<style scoped>

</style>
