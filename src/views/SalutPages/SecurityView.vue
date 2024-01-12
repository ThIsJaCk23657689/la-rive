<script setup lang="ts">
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './Security/Page01.vue'
import Page02View from './Security/Page02.vue'
import Page03View from './Security/Page03.vue'
import Page04View from './Security/Page04.vue'
import Page05View from './Security/Page05.vue'
import Page06View from './Security/Page06.vue'
import Page07View from './Security/Page07.vue'
import Page08View from './Security/Page08.vue'
import Page09View from './Security/Page09.vue'
import Page10View from './Security/Page10.vue'

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
];

const buttons = [
    {
        text: "電動車",
        start: 11,
        end: 11
    }
];

const logo = new URL('@/assets/images/salut/logos/Security.png', import.meta.url).href;
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons" :logo="logo">
</SalutWrapper>
</template>

<style scoped>

</style>
