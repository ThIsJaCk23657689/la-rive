<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';

const currentPageIndex = ref(0);

const MenuItems = [
    [
        { 
            link: { name: '' },
            url: new URL('@/assets/images/cases/01.png', import.meta.url).href, 
            name: '海悅' 
        },
        { 
            link: { name: '' },
            url: new URL('@/assets/images/cases/02.png', import.meta.url).href, 
            name: '澄品' 
        },
        { 
            link: { name: 'cases-case03' },
            url: new URL('@/assets/images/cases/03.png', import.meta.url).href, 
            name: 'S HOME' 
        },
        { 
            link: { name: 'cases-case04' },
            url: new URL('@/assets/images/cases/04.png', import.meta.url).href, 
            name: '好樣' 
        },
    ],
    [
        { 
            link: { name: 'cases-case05' },
            url: new URL('@/assets/images/cases/05.png', import.meta.url).href, 
            name: '九悅' 
        },
        { 
            link: { name: 'cases-case06' },
            url: new URL('@/assets/images/cases/06.png', import.meta.url).href, 
            name: '見山' 
        },
        { 
            link: { name: 'cases-case07' },
            url: new URL('@/assets/images/cases/07.png', import.meta.url).href, 
            name: '居雍' 
        },
    ]
];

function PrevPage() {
    if (currentPageIndex.value == 0) {
        currentPageIndex.value = 1;
    } else {
        currentPageIndex.value--;
    }
}

function NextPage() {
    if (currentPageIndex.value == 1) {
        currentPageIndex.value = 0;
    } else {
        currentPageIndex.value++;
    }
}

</script>

<template>
<div class="w-full h-full relative">

    <button v-if="currentPageIndex == 0" class="w-8 border border-white rounded-full p-1 text-white prev-button" @click="PrevPage">
        <ChevronLeftIcon></ChevronLeftIcon>
    </button>
    <button v-else class="w-8 border border-black rounded-full p-1 prev-button" @click="PrevPage">
        <ChevronLeftIcon></ChevronLeftIcon>
    </button>

    <button v-if="currentPageIndex == 0" class="w-8 border border-white rounded-full p-1 text-white next-button" @click="NextPage">
        <ChevronRightIcon></ChevronRightIcon>
    </button>
    <button v-else class="w-8 border border-black rounded-full p-1 next-button" @click="NextPage">
        <ChevronRightIcon></ChevronRightIcon>
    </button>

    <div class="overflow-hidden w-full h-full flex">
        
        <!-- <transition name="slide-fade"> -->
            <div v-show="currentPageIndex == 0" class="w-full h-full bg-primary-100 flex flex-row">
                <div class="h-full absolute cube">
                    <div class="w-full bg-primary-800 cube-top"></div>
                    <div class="w-full bg-primary-300 cube-down"></div>
                </div>

                <div class="middle-area h-full">
                    
                    <div class="grid grid-cols-2 gap-9">

                        <template v-for="(item, index) in MenuItems[0]" :key="index">
                            <div v-if="item.link.name == ''" class="mb-10 flex flex-col items-center">
                                <div>
                                    <img :src="item.url" alt="" class="object-cover">
                                </div>
                                <div class="mt-4 border-x px-4">
                                    <span class="text-white DF-LiHei-Bd-WIN-BF text-xl">{{ item.name }}</span>
                                </div>
                            </div>
                            <RouterLink v-else :to="item.link" class="mb-10 flex flex-col items-center">
                                <div>
                                    <img :src="item.url" alt="" class="object-cover">
                                </div>
                                <div class="mt-4 border-x px-4">
                                    <span class="text-white DF-LiHei-Bd-WIN-BF text-xl">{{ item.name }}</span>
                                </div>
                            </RouterLink>
                        </template>

                    </div>
                </div>

                <div class="right-area h-full bg-primary-300">
                    <span class="right-text english-font text-2xl text-white">PORTFOLIO</span>
                    <div class="small-cube bg-white"></div>
                </div>
            </div>
        <!-- </transition> -->

        <!-- <transition name="slide-fade"> -->
            <div v-show="currentPageIndex == 1" class="w-full h-full flex flex-row">

                <div class="middle-area2 h-full">
                    
                    <div class="grid grid-cols-3 gap-9">

                        <template v-for="(item, index) in MenuItems[1]" :key="index">
                            <RouterLink :to="item.link" class="mb-10 flex flex-col items-center">
                                <div class="card">
                                    <img :src="item.url" alt="" class="object-cover w-full h-full">
                                </div>
                                <div class="mt-4 border-x border-black px-4">
                                    <span class="text-black DF-LiHei-Bd-WIN-BF text-xl">{{ item.name }}</span>
                                </div>
                            </RouterLink>
                        </template>

                    </div>
                </div>

                <div class="cube-2 bg-primary-100"></div>

                <div class="right-area h-full bg-primary-300">
                    <span class="right-text english-font text-2xl text-white">PORTFOLIO</span>
                    <div class="small-cube bg-white"></div>
                </div>
            </div>
        <!-- </transition> -->
        
    </div>

</div>
</template>

<style scoped>
.prev-button {
    position: absolute;
    top: 50%;
    left: 3%;
    z-index: 10;
}

.next-button {
    position: absolute;
    top: 50%;
    right: 3%;
    z-index: 10;
}

.middle-area {
    width: 76.6%;
    margin-left: 15.3%;
    padding: 13% 21% 0% 10%;
}

.middle-area2 {
    padding: 20% 5% 0% 11%;
}

.right-area {
    width: 8.1%;
    padding: 6% 1.5%;
    position: relative;
}

.right-text {
    writing-mode: vertical-lr;
}

.card {
    height: 100%;
}

.cube {
    width: 1.69%;
    top: 0;
    left: 13.63%;
}

.cube-top {
    height: 79%;
}

.cube-down {
    height: 21%;
}

.small-cube {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7%;
}

.cube-2 {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 93%;
    height: 7%;
}


/* ========================== */
.slide-fade-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(100%);
	opacity: 0;
}


</style>
