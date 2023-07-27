<script setup lang="ts">
import SalutWrapper from '../../layouts/SalutWrapper.vue'
import { RouterLink, useRoute } from 'vue-router'

</script>

<template>
<SalutWrapper>
    <template v-slot:header>
        <div class="text-white text-5xl font-bold tracking-wide mr-10">Rinnai</div>
        <div class="text-white text-xl tracking-wide mr-10">日本瓦斯器具第一品牌</div>
    </template>

    <template v-slot:button>
        <RouterLink to="#" class="salut-button active">
            瓦斯爐 抽油煙機
        </RouterLink>
        <RouterLink to="#" class="salut-button">
            樣品屋
        </RouterLink>
    </template>

    <template v-slot:body>
        <img src="@/assets/images/salut/Rinnai/01.jpg" class="object-cover h-full">
        <div class="card text-white top">
            藏式強化玻璃 <br/>
            導煙設計排油煙機
        </div>
        <div class="card text-white bottom">
            黑色玻璃檯面式 <br/>
            防漏二口瓦斯爐
        </div>
    </template>
</SalutWrapper>
</template>

<style scoped>
.card {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 9%;
    background-color: black;
    border-radius: 20px;
    letter-spacing: 0.1rem;
    text-align: center;
}

.card.top {
    top: 30%;
    left: 10%;
}

.card.bottom {
    bottom: 25%;
    left: 10%;
}

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
