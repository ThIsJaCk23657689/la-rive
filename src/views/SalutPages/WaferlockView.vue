<script setup lang="ts">
import { RouterLink } from 'vue-router'

import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Waferlock/Page01.vue'
import Page02View from './Waferlock/Page02.vue'

const pages = [
    Page01View,
    Page02View,
];

const buttons = [
    {
        text: "感應式門鎖",
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
        <div class="text-white text-5xl font-bold tracking-wide mr-10">WAFERLOCK</div>
        <div class="text-white text-xl tracking-wide mr-10">全新智慧電子鎖　體驗未來生活</div>
    </template>
</SalutWrapper>
</template>

<style scoped>
</style>
