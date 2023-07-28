<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Rinnai/Page01.vue'
import Page02View from './Rinnai/Page02.vue'

const pages = [
    Page01View,
    Page02View
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
        end: 1
    }
];
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons">
    <template v-slot:header>
        <div class="text-white text-5xl font-bold tracking-wide mr-10">Rinnai</div>
        <div class="text-white text-xl tracking-wide mr-10">日本瓦斯器具第一品牌</div>
    </template>
</SalutWrapper>
</template>

<style scoped>
</style>
