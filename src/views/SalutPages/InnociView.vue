<script setup lang="ts">
import { RouterLink } from 'vue-router'

import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Innoci/Page01.vue'
import Page02View from './Innoci/Page02.vue'

const pages = [
    Page01View,
    Page02View
];

const buttons = [
    {
        text: "精品衛浴",
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
        <div class="text-white text-5xl font-bold tracking-wide mr-10">innoci</div>
        <div class="text-white text-xl tracking-wide mr-10">起源於德國精工的整體衛浴解決方案</div>
    </template>
</SalutWrapper>
</template>

<style scoped>

</style>
