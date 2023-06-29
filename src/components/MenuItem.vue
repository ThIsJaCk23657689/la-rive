<script setup lang="ts">
</script>

<template>
	<li class="item">
		<a href="#" class="block border-l-4 px-2
			border-primary-100 text-primary-100 hover:text-primary-200 hover:border-primary-200
			transition ease-out duration-300 overflow-hidden">
			
			<div class="flex flex-col">
				<span class="text-3xl font-semibold tracking-wide">
					<slot name="EnglishText"></slot>
				</span>
				<span class="text-2xl chinese-font font-semibold">
					<slot name="ChineseText"></slot>
				</span>
			</div>
			
		</a>
	</li>
</template>
  
<style scoped>
.item {
	margin-bottom: 2.8rem;
}
</style>
  