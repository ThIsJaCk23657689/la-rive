<script setup lang="ts">
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './ElectricCar/Page01.vue'
import Page02View from './ElectricCar/Page02.vue'
import Page03View from './ElectricCar/Page03.vue'
import Page04View from './ElectricCar/Page04.vue'
import Page05View from './ElectricCar/Page05.vue'
import Page06View from './ElectricCar/Page06.vue'
import Page07View from './ElectricCar/Page07.vue'
import Page08View from './ElectricCar/Page08.vue'
import Page09View from './ElectricCar/Page09.vue'
import Page10View from './ElectricCar/Page10.vue'

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

const logo = new URL('@/assets/images/salut/logos/ElectricCar.png', import.meta.url).href;
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons" :logo="logo">
</SalutWrapper>
</template>

<style scoped>

</style>
