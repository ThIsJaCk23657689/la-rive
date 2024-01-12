<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Rinnai/Page01.vue'
import Page02View from './Rinnai/Page02.vue'
import Page03View from './Rinnai/Page03.vue'

const pages = [
    Page01View,
    Page02View,
    Page03View
];

const buttons = [
    {
        text: "瓦斯爐 抽油煙機",
        start: 0,
        end: 0
    },
    {
        text: "樣品屋",
        start: 1,
        end: 2
    }
];

const logo = new URL('@/assets/images/salut/logos/Rinnai.png', import.meta.url).href;
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons" :logo="logo">
    <template v-slot:header>
        <div class="text-white text-xl tracking-wide mr-10">日本瓦斯器具第一品牌</div>
    </template>
</SalutWrapper>
</template>

<style scoped>
</style>
