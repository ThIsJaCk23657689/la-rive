<script setup lang="ts">
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import { RouterLink, useRoute } from 'vue-router'

</script>

<template>
<SalutWrapper>
    <template v-slot:header>
        <div class="text-white text-5xl font-bold tracking-wide mr-10">WAFERLOCK</div>
        <div class="text-white text-xl tracking-wide mr-10">全新智慧電子鎖　體驗未來生活</div>
    </template>

    <template v-slot:button>
        <RouterLink to="#" class="salut-button active">
            感應式門鎖
        </RouterLink>
        <RouterLink to="#" class="salut-button">
            樣品屋
        </RouterLink>
    </template>

    <template v-slot:body>
        <img src="@/assets/images/salut/Woferlock/01.jpg" class="object-cover w-full h-full">
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
