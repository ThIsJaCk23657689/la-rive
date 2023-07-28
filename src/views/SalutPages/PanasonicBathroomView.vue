<script setup lang="ts">
import { RouterLink } from 'vue-router'

import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './PanasonicBathroom/Page01.vue'
import Page02View from './PanasonicBathroom/Page02.vue'
import Page03View from './PanasonicBathroom/Page03.vue'
import Page04View from './PanasonicBathroom/Page04.vue'

const pages = [
    Page01View,
    Page02View,
    Page03View,
    Page04View
];

const buttons = [
    {
        text: "影片",
        start: 0,
        end: 0  
    },
    {
        text: "頂級全自動馬桶",
        start: 1,
        end: 2
    },
    {
        text: "樣品屋",
        start: 3,
        end: 3
    }
];

const logo = new URL('@/assets/images/salut/logos/Panasonic.png', import.meta.url).href;
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons" :logo="logo">
    <template v-slot:header>
        <div class="text-white text-xl tracking-wide mr-10">顛覆你對浴廁空間的想像</div>
    </template>
</SalutWrapper>
</template>

<style scoped>

</style>
