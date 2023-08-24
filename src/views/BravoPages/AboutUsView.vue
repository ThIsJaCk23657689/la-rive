<script setup lang="ts">

</script>

<template>
<div class="w-full h-full flex flex-col">
    <div class="w-full up">
        <div class="title-container">
            <Transition name="slide-fade-right" appear>
                <div class="text-7xl flex items-end">
                    <span class="DF-LiHei-Bd-WIN-BF inline-block">職人</span>
                    <span class="inline-block">態度&nbsp;╳&nbsp;</span>
                    <span class="DF-LiHei-Bd-WIN-BF inline-block">風格</span>
                    <span class="inline-block">專屬</span>
                </div>
            </Transition>
            <Transition name="slide-fade-right" appear>
                <h3 class="mt-6 text-6xl DF-LiHei-Bd-WIN-BF sub-title">美的<span class="english-font">IN</span> 同興協記</h3>
            </Transition>
        </div>
    </div>
    <div class="w-full bg-primary-100 bottom">

        <Transition name="slide-fade-in" appear>
            <div class="text-white white-border-container font-size-24 DF-LiHei-Bd-WIN-BF flex items-center justify-center tracking-widest">
                我們用 <span class="DFHei-Lt-HK-BF tracking-normal text-transform">PMG</span>：務實、時尚、自然，成就關於美的一切
            </div>
        </Transition>

        <Transition name="slide-fade-in2" appear>
            <ul class="text-white list-container font-size-20">
                <li class="mb-3">
                    <div class="DF-LiHei-Bd-WIN-BF flex flex-row items-center justify-start">
                        <div class="english-col">Pragmatic</div>
                        <div>頂真精神，誠信負責、把事情做到最好</div>
                    </div>
                </li>
                <li class="mb-3">
                    <div class="DF-LiHei-Bd-WIN-BF flex flex-row items-center justify-start">
                        <div class="english-col">Modern</div>
                        <div>建築觀點因時因地制宜，反映當代生活風格</div>
                    </div>
                </li>
                <li class="mb-3">
                    <div class="DF-LiHei-Bd-WIN-BF flex flex-row items-center justify-start">
                        <div class="english-col">Green</div>
                        <div>以緣相映的哲學，自然而然與環境共生</div>
                    </div>
                </li>
            </ul>
        </Transition>
        
    </div>
    <div class="h-full absolute cube">
        <div class="w-full bg-primary-400 cube-top"></div>
        <div class="w-full bg-primary-700 cube-down"></div>
    </div>
</div>
</template>

<style scoped>
.up {
    height: 54%;
}

.bottom {
    height: 46%;
}

.title-container {
    margin-top: 20%;
    margin-left: 11%;
}

.sub-title {
    color: #4d4d4d;
}

.white-border-container {
    margin-top: 10.2%;
    margin-left: 10%;
    width: 46.11%;
    height: 10.56%;
    border: 1px solid white;
}

.text-transform {
    transform: scaleX(1.6);
    margin-left: 11px;
    margin-right: 7px;
}

.list-container {
    margin-top: 1.5%;
    margin-left: 12%;
}

.english-col {
    width: 9%
}

.cube {
    width: 15px;
    top: 0;
    left: 83.54%;
    z-index: 1;
}

.cube-top {
    height: 45%;
}

.cube-down {
    height: 55%;
}







.slide-fade-right-enter-active {
	transition: all 2.0s ease-out;
}

.slide-fade-right-leave-active {
	transition: all 2.0s ease-out;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
	transform: translateX(-80px);
	opacity: 0;
}


.slide-fade-in-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-in-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-in-enter-from,
.slide-fade-in-leave-to {
	opacity: 0;
}


.slide-fade-in2-enter-active {
	transition: all 2.5s ease-out;
}

.slide-fade-in2-leave-active {
	transition: all 2.5s ease-out;
}

.slide-fade-in2-enter-from,
.slide-fade-in2-leave-to {
	opacity: 0;
}


</style>
