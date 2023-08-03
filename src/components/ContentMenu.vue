<script setup lang="ts">
import { ref, watch, onMounted  } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

const activeSubMenu = ref(null);

const route = useRoute();

const menuItems = ref([
	{ 
        id: 1,
        path:'/bonjour', 
        englishText: 'BONJOUR!', 
        chineseText: '地段', 
        boderColor: 'border-primary-100', 
        hoverColor: 'hover:text-primary-100',
        subItemTop: 'subItemOffset-1',
        subItems: [
            { id: 1, name:'bonjour', path: '/bonjour', text: '生活圈' }
        ]  
    },
	{ 
        id: 2,
        path:'/clao',    
        englishText: 'CLAO!',    
        chineseText: '規劃', 
        boderColor: 'border-primary-200', 
        hoverColor: 'hover:text-primary-200',
        subItemTop: 'subItemOffset-2',
        subItems: [
            { id: 1, name:'', path: '#', text: '3D影片' },
            { id: 2, name:'apperance', path: '/clao/apperance', text: '外觀3D' },
            { id: 3, name:'1-floor', path: '/clao/1-floor', text: '1樓' },
            { id: 4, name:'roof', path: '/clao/roof', text: '頂樓' },
            { id: 5, name:'standard', path: '/clao/standard', text: '標準層' },
            { id: 6, name:'standard-individual', path: '/clao/standard-individual', text: '各戶平面' },
            { id: 7, name:'basement', path: '/clao/basement', text: 'B1-B3' }
        ]  
    },
	{ 
        id: 3,
        path:'/salut',   
        englishText: 'SALUT!',   
        chineseText: '選材', 
        boderColor: 'border-primary-700',   
        hoverColor: 'hover:text-primary-700',
        subItemTop: 'subItemOffset-3',
        subItems: [
            { id: 1, name:'panasonic-kitchen', path: '/salut/panasonic-kitchen', text: '日本 Panasonic 頂級整體廚具' },
            { id: 2, name:'rinnai', path: '/salut/rinnai', text: '日本林內 Rinnai 瓦斯爐與抽油煙機' },
            { id: 3, name:'bosch', path: '/salut/bosch', text: '德國 BOSCH 全崁式洗碗機' },
            { id: 4, name:'panasonic-bathroom', path: '/salut/panasonic-bathroom', text: '日本 Panasonic 精品衛浴' },
            { id: 5, name:'innoci', path: '/salut/innoci', text: '德國 innoci 精品衛浴' },
            { id: 6, name:'hansgrohe', path: '/salut/hansgrohe', text: '德國 hansgrohe 頂級衛浴五金龍頭' },
            { id: 7, name:'lifegear', path: '/salut/lifegear', text: 'LIFEGEAR 多功能暖風機' },
            { id: 8, name:'', path: '#', text: '力霸精品氣密窗 + 膠合玻璃' },
            { id: 9, name:'waferlock', path: '/salut/waferlock', text: 'WAFERLOCK 精品電子鎖' },
            { id: 10, name:'lamett', path: '/salut/lamett', text: '比利時 Lamett 石晶地板' },
            { id: 11, name:'daiken', path: '/salut/daiken', text: '日本大建室內靜音門' }
        ]  
    },
	{ 
        id: 4,
        path:'/bravo',   
        englishText: 'BRAVO!',   
        chineseText: '品牌', 
        boderColor: 'border-black',   
        hoverColor: 'hover:text-black',
        subItemTop: 'subItemOffset-4',
        subItems: [
            { id: 1, name:'', path: '#', text: '理念' },
            { id: 2, name:'', path: '#', text: '業績' },
            { id: 3, name:'', path: '#', text: '團隊' }
        ]    
    },
]);

const showSubMenu = (menuId: any) => {
    activeSubMenu.value = menuId;
};

const isActive = (itemId: any) => {
    if (activeSubMenu.value !== null) {
        return activeSubMenu.value === itemId;
    }
    return false;
};

const isSubActive = (routerName: string) => {
    return route.name === routerName;
};

watch(
    () => route.path,
    () => {

    }
);

onMounted(() => {

})

</script>

<template>
    <div class="w-full h-full">

        <Transition name="slide-fade-up" appear>
            <div class="absolute cube-1 bg-primary-100"></div>
	    </Transition>

        <Transition name="slide-fade-In" appear>
            <div class="absolute cube-2 bg-primary-400">

                <ul>
                    <template v-for="item in menuItems">
                        <li class="item">
                            <RouterLink :to="item.path" :class="['item-link', 'text-primary-500', item.boderColor, item.hoverColor]" @mouseover="showSubMenu(item.path)">
                                <div class="flex flex-col">
                                    <span class="text-2xl font-semibold tracking-wide english-font leading-none">
                                        {{ item.englishText }}
                                    </span>
                                    <span class="text-xl font-semibold chinese-font leading-none">
                                        {{ item.chineseText }}
                                    </span>
                                </div>
                            </RouterLink>

                            <transition name="slide-silde-down">
                                <div v-if="isActive(item.path)" :class="['submenu', item.subItemTop]">
                                    <ul :class="['border-t-4', 'p-2', 'pl-0', item.boderColor]">
                                        <li v-for="subItem in item.subItems" :key="subItem.id">
                                            <RouterLink v-if="isSubActive(subItem.name)" :to="subItem.path" class="mb-1 block text-black font-bold">
                                                <span class="submenu-text">{{ subItem.text }}</span>
                                            </RouterLink>
                                            <RouterLink v-else :to="subItem.path" class="text-primary-600 mb-1 block hover:text-black hover:font-bold transition-300-out">
                                                <span class="submenu-text">{{ subItem.text }}</span>
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </div>
                            </transition>

                        </li>
                    </template>
                </ul>

                <div class="logo">
                    <RouterLink to="/">
                        <img src="@/assets/images/index_larive-logo-white.png" alt="" class="">
                    </RouterLink>
                </div>

            </div>
        </Transition>

    </div>
</template>

<style scoped>
.cube-1 {
	width: 16%;
	height: 12.78%;
	bottom: 0px;
	left: 0px;
}

.cube-2 {
	width: 84%;
	height: 85%;
	top: 09.91%;
	left: 16%;
    padding-top: 12.13%;
}

.submenu {
    margin-left: 24%;
    max-height: 500px;
}

.logo {
    position: absolute;
    margin-left: 5.5%;
    margin-bottom: 6.5%;
    bottom: 0px;
}

.item {
	margin-bottom: 10%;
}

.item-link {
    display: block;
    border-left-width: 20px;
    border-left-style: solid;
    padding-left: 0.8rem;
    transition: all 0.3s ease-out;
}

.item-link:hover {
    border-left-width: 37px;
}

.submenu-text {
    font-size: 0.875rem;
}

.subItemOffset-1{
    top: 7%;
}

.subItemOffset-2 {
    top: 22%;
}

.subItemOffset-3 {
    top: 36%;
}

.subItemOffset-4 {
    top: 51%;
}

@media (max-width: 1536px) {
    .logo {
        width: 35%;
    }
}


/* ========================== */
.slide-fade-down-enter-active, 
.slide-fade-down-leave-active {
	transition: all 1.0s ease-out;
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
	transform: translateY(-80px);
	opacity: 0;
}

/* ========================== */
.slide-fade-up-enter-active,
.slide-fade-up-leave-active {
	transition: all 1.2s ease-out;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
	transform: translateY(80px);
	opacity: 0;
}


/* ========================== */
.slide-fade-In-enter-active,
.slide-fade-In-leave-active {
	transition: all 0.8s ease-out;
}

.slide-fade-In-enter-from,
.slide-fade-In-leave-to {
	opacity: 0;
}

/* ========================== */
.slide-silde-down-enter-active {
    transition: all 1.0s ease-out;
}

.slide-silde-down-leave-active {
	transition: all 0.5s ease-out;
}

.slide-silde-down-enter-from,
.slide-silde-down-leave-to {
    max-height: 0;
    overflow: hidden;
	opacity: 0;
}

</style>
