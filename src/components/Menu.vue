<script setup lang="ts">
import { ref } from 'vue';
import MenuItem from '../components/MenuItem.vue'

const menuItems = ref([
	{ path:'/bonjour', englishText: 'BONJOUR!', chineseText: '地段' },
	{ path:'/clao', englishText: 'CLAO!',    chineseText: '規劃' },
	{ path:'/salut', englishText: 'SALUT!',   chineseText: '選材' },
	{ path:'/bravo', englishText: 'BRAVO!',   chineseText: '品牌' },
]);

</script>

<template>
<ul class="h-full menu">
	
	<template v-for="item in menuItems">
		<Transition name="fade-in" appear>
			<MenuItem :path="item.path">
				<template #EnglishText>
					{{ item.englishText }}
				</template>
				<template #ChineseText>
					{{ item.chineseText }}
				</template>
			</MenuItem>
		</Transition>
	</template>
	
</ul>
</template>
  
<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
	transition: all 1.0s ease-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
	opacity: 0.01;
}

.menu {
	margin-left: 14%;
}
</style>
  