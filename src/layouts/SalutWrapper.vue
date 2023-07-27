<script setup lang="ts">

</script>

<template>
<div class="bg-primary-100 w-full top flex flex-row justify-between items-end pb-6 px-20">
    <div class="flex flex-row items-end">
        <slot name="header"></slot>
    </div>

    <div class="flex flex-row gap-3">
        <slot name="button"></slot>
    </div>
</div>

<div class="w-full middle overflow-hidden relative">
    <slot name="body"></slot>
</div>

<div class="bg-primary-100 w-full bottom flex flex-row justify-end items-center gap-5 px-56">
    <div class="round-button">&lt</div>
    <div class="round-button">&gt</div>
</div>
</template>

<style scoped>

.top {
    height: 19.5%;
}

.middle {
    height: 68%;
}

.bottom {
    height: 12.5%;
}

.round-button {
    width: 35px;
    height: 35px;
    border: solid 1px white;
    border-radius: 25px;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

</style>
