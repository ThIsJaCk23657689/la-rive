<script setup lang="ts">
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import { RouterLink, useRoute } from 'vue-router'

</script>

<template>
<SalutWrapper>
    <template v-slot:header>
        <div class="text-white text-5xl font-bold tracking-wide mr-10">LIFEGEAR</div>
        <div class="text-white text-xl tracking-wide mr-10">轉動生活的齒輪</div>
    </template>

    <template v-slot:button>
        <RouterLink to="#" class="salut-button active">
            多功能暖風機
        </RouterLink>
    </template>

    <template v-slot:body>
        <img src="@/assets/images/salut/Lifegear/01.jpg" class="object-cover w-full h-full">
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
