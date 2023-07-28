<script setup lang="ts">
import { RouterLink } from 'vue-router'

import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Lamett/Page01.vue'
import Page02View from './Lamett/Page02.vue'
import Page03View from './Lamett/Page03.vue'
import Page04View from './Lamett/Page04.vue'
import Page05View from './Lamett/Page05.vue'
import Page06View from './Lamett/Page06.vue'
import Page07View from './Lamett/Page07.vue'
import Page08View from './Lamett/Page08.vue'
import Page09View from './Lamett/Page09.vue'
import Page10View from './Lamett/Page10.vue'
import Page11View from './Lamett/Page11.vue'

const pages = [
    Page01View,
    Page02View,
    Page03View,
    Page04View,
    Page05View,
    Page06View,
    Page07View,
    Page08View,
    Page09View,
    Page10View,
    Page11View
];

const buttons = [
    {
        text: "關於樂邁",
        start: 0,
        end: 2
    },
    {
        text: "石晶地板",
        start: 3,
        end: 10
    },
    {
        text: "樣品屋",
        start: 11,
        end: 11
    }
];

const logo = new URL('@/assets/images/salut/logos/Lamett.png', import.meta.url).href;
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons" :logo="logo">
    <template v-slot:header>
        <div class="text-white text-xl tracking-wide mr-10">健康，更貼近自然</div>
    </template>
</SalutWrapper>
</template>

<style scoped>

</style>
