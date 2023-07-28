<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Daiken/Page01.vue'
import Page02View from './Daiken/Page02.vue'

const pages = [
    Page01View,
    Page02View
];

const buttons = [
    {
        text: "室內靜音門",
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
        <div class="text-white text-5xl font-bold tracking-wide mr-10">DAIKEN</div>
        <div class="text-white text-xl tracking-wide mr-10">日本原裝進口　安靜舒適的空間環境</div>
    </template>
</SalutWrapper>
</template>

<style scoped>

</style>
