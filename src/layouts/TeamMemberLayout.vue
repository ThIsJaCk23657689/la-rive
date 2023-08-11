<script setup lang="ts">
import { ref  } from 'vue';
import { ArrowLongLeftIcon } from '@heroicons/vue/24/solid';
import { RouterLink } from 'vue-router'

const props = defineProps<{
    person: {
        avatar: string;
        title: string;
        company: string;
        name: string;
        position: string;
        bio: string[];
        awards: string[];
        workImages: { url: string }[];
    },
    switchLink: {
        router: { name: string };
        name: string;
    }
}>()

</script>

<template>
<div class="w-full h-full flex flex-row">
    <div class="h-full area-left flex flex-col justify-between">
        
        <template v-for="(image, index) in person.workImages" :key="index">
            <div class="grow">
                <img :src="image.url" alt="" class="object-cover h-full">
            </div>
        </template>

    </div>
    <div class="h-full area-middle flex flex-col">

        <div>
            <div class="overflow-hidden w-60">
                <img :src="person.avatar" alt="" class="object-cover w-full" />
            </div>
            <div class="mt-10 text-white DF-LiHei-Bd-WIN-BF">
                <span class="font-size-24 mr-2">{{ person.company }}</span><br/>
                <span class="font-size-24 mr-2">{{ person.name }}</span> 
                <span class="fon-size-20 mb-1">{{ person.position }}</span>
            </div>
            <div class="text-white mt-8">
                <span>學經歷</span><br/>
                <template v-for="(line, index) in person.bio" :key="index">
                    <span>{{ line }}</span><br/>
                </template>
            </div>
            <div class="text-white mt-8">
                <span>獲獎</span><br/>
                <template v-for="(line, index) in person.awards" :key="index">
                    <span>{{ line }}</span><br/>
                </template>
            </div>
        </div>

    </div>
    <div class="h-full area-right bg-primary-100 relative">
        <RouterLink :to="switchLink.router" class="switch-button">
            <span class="text-white DF-LiHei-Bd-WIN-BF font-size-24">{{ switchLink.name }}</span>
        </RouterLink>
        <RouterLink :to="{ name: 'teams-menu' }" class="menu-button">
            <span class="text-white DF-LiHei-Bd-WIN-BF text-3xl vertical">{{ person.title }}</span>
            <ArrowLongLeftIcon class="text-white"></ArrowLongLeftIcon>
        </RouterLink>
    </div>
</div>
</template>

<style scoped>
.area-left {
    width: 46%;
    padding-right: 1%;
}

.area-middle {
    width: 33%;
    background-color: #333333;
    padding-top: 12%;
    padding-left: 4%;
}

.area-right {
    width: 21%;
    @apply bg-primary-100;
}

.vertical{
    writing-mode: vertical-rl;
    text-orientation: mixed;
}

.switch-button {
    position: absolute;
    top: 16%;
    right: 11%;
}

.menu-button {
    position: absolute;
    bottom: 7%;
    left: 17%;
}
</style>
