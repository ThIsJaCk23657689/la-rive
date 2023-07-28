<script setup lang="ts">
import { ref, computed, markRaw } from 'vue';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid';
import SalutClassButton from '@/components/SalutClassButton.vue';

const props = defineProps<{
    pages: Array<any>,
    buttons: Array<{
        text: string,
        start: number,
        end: number
    }>
}>()

const currentPageIndex = ref(0);
const currentButtonIndex = ref(0);
// const currentMode = ref("right");

const currentView = computed(() => {
    return markRaw(props.pages[currentPageIndex.value]);
});

function PrevPage() {
    // currentMode.value = "left";
    currentPageIndex.value = ( currentPageIndex.value - 1 + props.pages.length ) % props.pages.length;
}

function NextPage() {
    // currentMode.value = "right";
    currentPageIndex.value = ( currentPageIndex.value + 1 ) % props.pages.length;
}

function IsButtonActive(index: number) {
    return index === currentButtonIndex.value;
}

</script>

<template>
<div class="bg-primary-100 w-full top flex flex-row justify-between items-end pb-6 px-20">
    <div class="flex flex-row items-end">
        <slot name="header"></slot>
    </div>

    <div class="flex flex-row gap-3">
        <template v-for="(button, index) in buttons">
            <SalutClassButton :active="IsButtonActive(index)">
                {{ button.text }}
            </SalutClassButton>
        </template>
    </div>
</div>

<div class="w-full middle overflow-hidden relative">
    <transition name="slide" mode="out-in">
        <component v-bind:is="currentView" :key="currentPageIndex"></component>
    </transition>
</div>

<div class="bg-primary-100 w-full bottom flex flex-row justify-end items-center gap-5 px-56">
    <button class="w-9 h-9 border border-white rounded-full text-white flex justify-center items-center group hover:bg-neutral-100 transition-300-out"
            @click="PrevPage()">
        <ChevronLeftIcon class="h-4 w-4 text-neutral-100 group-hover:text-primary-100" />
    </button>
    <button class="w-9 h-9 border border-white rounded-full text-white flex justify-center items-center group hover:bg-neutral-100 transition-300-out"
            @click="NextPage()">
        <ChevronRightIcon class="h-4 w-4 text-neutral-100 group-hover:text-primary-100" />
    </button>
</div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: opacity 0.4s ease-out;
}
.slide-enter, .slide-leave-to {
    opacity: 0;
}

/* .left-enter-active, .left-leave-active {
    transition: transform 0.4s ease-out;
}
.left-enter {
    transform: translate(100%, 0);
}
.left-leave-to {
    transform: translate(-100%, 0);
}

.right-enter-active, .right-leave-active {
    transition: transform 0.4s ease-out;
}
.right-enter {
    transform: translate(-100%, 0);
}
.right-leave-to {
    transform: translate(100%, 0);
}

 */
.top {
    height: 19.5%;
}

.middle {
    height: 68%;
}

.bottom {
    height: 12.5%;
}
</style>
