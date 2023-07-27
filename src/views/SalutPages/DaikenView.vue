<script setup lang="ts">
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import { RouterLink, useRoute } from 'vue-router'

</script>

<template>
<SalutWrapper>
    <template v-slot:header>
        <div class="text-white text-5xl font-bold tracking-wide mr-10">DAIKEN</div>
        <div class="text-white text-xl tracking-wide mr-10">日本原裝進口　安靜舒適的空間環境</div>
    </template>

    <template v-slot:button>
        <RouterLink to="#" class="salut-button active">
            室內靜音門
        </RouterLink>
        <RouterLink to="#" class="salut-button">
            樣品屋
        </RouterLink>
    </template>

    <template v-slot:body>
        <img src="@/assets/images/salut/Daiken/01.jpg" class="object-cover w-full h-full">
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
