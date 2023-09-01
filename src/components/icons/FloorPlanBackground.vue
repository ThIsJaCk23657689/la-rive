<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps<{
    currentHoverIndex: number,
}>()

function getRoomCssClasses(roomIndex: number) {
    let classes = [ 'transition-300-out' ];
    if (roomIndex == 1 || roomIndex == 3) {
        classes.push('cls-1');
    } else {
        classes.push('cls-2');
    }

    if (props.currentHoverIndex == roomIndex) {
        classes.push('cls-hover');
    }

    return classes;
}

watch(() => props.currentHoverIndex, (newValue, oldValue) => {
    // 在這裡觸發重新渲染或其他相關操作

});

</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960.7 793.73">
        <g id="圖層_2" data-name="圖層 2">
            <g id="_圖層_" data-name="&lt;圖層&gt;">
                <polygon :class="getRoomCssClasses(4)"
                    points="811.25 41.21 810.77 21.71 630.87 21.71 630.87 0 513.11 0 512.88 82.23 490.3 82.23 490.3 245.5 513.11 245.5 513.11 252.59 513.11 252.59 513.11 293.34 567.47 293.34 567.47 278.07 631.49 278.07 631.49 277.98 890.98 277.98 890.98 255.9 925.93 256.31 925.93 190.94 945.52 191.14 946.03 41.21 811.25 41.21" />
                <polygon :class="getRoomCssClasses(1)"
                    points="791.45 456.24 791.45 408.41 752.08 408.41 752.08 456.24 490.5 456.24 490.5 738.72 506.49 738.72 506.49 793.73 630.48 793.73 630.48 738.72 960.7 738.72 960.7 456.24 791.45 456.24" />
                <polygon :class="getRoomCssClasses(2)"
                    points="496.83 690.89 496.83 504.27 496.83 497.01 496.83 456.24 321.87 456.24 321.87 371.52 153.54 371.52 153.54 437.57 153.54 465.81 0 465.81 0.3 553.22 0.3 588.79 32.95 588.79 32.95 719.13 97.33 719.13 100.84 719.2 98.08 732.19 353.26 732.19 353.71 773.36 474.01 773.49 474.01 690.89 496.83 690.89" />
                <polygon :class="getRoomCssClasses(3)"
                    points="0.3 195.56 0.3 162.9 32.95 162.9 31.8 45.07 98.08 45.62 98.08 26.03 328.4 26.03 362.07 26.03 362.07 0 474.01 0 474.01 82.51 490.3 82.51 490.3 245.5 474.01 245.5 474.01 293.34 320.77 293.34 320.77 374.79 153.54 374.79 153.54 308.51 137.17 308.51 137.17 278.07 0.76 278.07 0.3 195.56" />
            </g>
        </g>
    </svg>
</template>

<style scoped>
.cls-1 {
    fill: #c1a081;
    opacity: 0.5;
}

.cls-2 {
    fill: #006878;
    opacity: 0.5;
}
.cls-hover {
    opacity: 0.25;
}
</style>