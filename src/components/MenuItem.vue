<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
	path: {
		type: String,
		required: true
	}
});

</script>

<template>
	<li class="item">
		<RouterLink :to="path" class="block border-l-4 px-2
			border-primary-500 text-primary-500 hover:text-primary-100 hover:border-primary-100
			transition ease-out duration-300 overflow-hidden">
			
			<div class="flex flex-col">
				<span class="font-semibold tracking-wide english-font text-3xl">
					<slot name="EnglishText"></slot>
				</span>
				<span class="font-semibold chinese-font text-2xl">
					<slot name="ChineseText"></slot>
				</span>
			</div>
			
		</RouterLink>
	</li>
</template>
  
<style scoped>
.item {
	margin-bottom: 2.8rem;
}

@media (max-width: 1536px) {
	.item {
		margin-bottom: 3.2rem;
	}
}

</style>
  