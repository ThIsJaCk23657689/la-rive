<script setup lang="ts">
import { RouterLink } from 'vue-router'

import SalutWrapper from '../../layouts/SalutWrapper.vue'
import Page01View from './PanasonicKitchen/Page01.vue'
import Page02View from './PanasonicKitchen/Page02.vue'
import Page03View from './PanasonicKitchen/Page03.vue'
import Page04View from './PanasonicKitchen/Page04.vue'
import Page05View from './PanasonicKitchen/Page05.vue'
import Page06View from './PanasonicKitchen/Page06.vue'
import Page07View from './PanasonicKitchen/Page07.vue'
import Page08View from './PanasonicKitchen/Page08.vue'
import Page09View from './PanasonicKitchen/Page09.vue'
import Page10View from './PanasonicKitchen/Page10.vue'
import Page11View from './PanasonicKitchen/Page11.vue'
import Page12View from './PanasonicKitchen/Page12.vue'

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
    Page11View,
    Page12View
];

const buttons = [
    {
        text: "頂級廚具",
        start: 0,
        end: 5
    },
    {
        text: "人造石檯面",
        start: 6,
        end: 6
    },
    {
        text: "樣品屋",
        start: 7,
        end: 11
    }
];

const logo = new URL('@/assets/images/salut/logos/Panasonic.png', import.meta.url).href;
</script>

<template>
<SalutWrapper :pages="pages" :buttons="buttons" :logo="logo">
    <template v-slot:header>
        <div class="text-white text-xl tracking-wide mr-10">美好生活　從家開始</div>
    </template>
</SalutWrapper>
</template>

<style scoped>
.salut-button {
    border: solid 1px white;
    border-radius: 8px;
    text-align: center;
    color: white;
    padding: 2px 10px;
    min-width: 125px;
}

.salut-button.active {
    background-color: white;
    color: #006878;
}
</style>
