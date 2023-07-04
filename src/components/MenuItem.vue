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
				<span class="text-3xl font-semibold tracking-wide english-font">
					<slot name="EnglishText"></slot>
				</span>
				<span class="text-2xl font-semibold">
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
</style>
  