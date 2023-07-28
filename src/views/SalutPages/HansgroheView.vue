<script setup lang="ts">
import { RouterLink } from 'vue-router'

import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Hansgrohe/Page01.vue'
import Page02View from './Hansgrohe/Page02.vue'
import Page03View from './Hansgrohe/Page03.vue'
import Page04View from './Hansgrohe/Page04.vue'
import Page05View from './Hansgrohe/Page05.vue'
import Page06View from './Hansgrohe/Page06.vue'

const pages = [
    Page01View,
    Page02View,
    Page03View,
    Page04View,
    Page05View,
    Page06View
];

const buttons = [
    {
        text: "德國頂級龍頭技術",
        start: 0,
        end: 3
    },
    {
        text: "樣品屋",
        start: 4,
        end: 5
    },
];

const logo = new URL('@/assets/images/salut/logos/Hansgrohe.png', import.meta.url).href;
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons" :logo="logo">
    <template v-slot:header>
        <div class="text-white text-xl tracking-wide mr-10">世界頂尖工藝打造</div>
    </template>
</SalutWrapper>
</template>

<style scoped>

</style>
