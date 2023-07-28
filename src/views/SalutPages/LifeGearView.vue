<script setup lang="ts">
import { RouterLink } from 'vue-router'

import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Lifegear/Page01.vue'
import Page02View from './Lifegear/Page02.vue'
import Page03View from './Lifegear/Page03.vue'
import Page04View from './Lifegear/Page04.vue'

const pages = [
    Page01View,
    Page02View,
    Page03View,
    Page04View
];

const buttons = [
    {
        text: "多功能暖風機",
        start: 0,
        end: 3
    }
];
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons">
    <template v-slot:header>
        <div class="text-white text-5xl font-bold tracking-wide mr-10">LIFEGEAR</div>
        <div class="text-white text-xl tracking-wide mr-10">轉動生活的齒輪</div>
    </template>
</SalutWrapper>
</template>

<style scoped>

</style>
