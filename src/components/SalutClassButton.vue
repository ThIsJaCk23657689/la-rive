<script setup lang="ts">
const props = defineProps<{
	active: boolean | false
}>()
</script>

<template>
	<RouterLink to="#" v-if="active" class="border border-white rounded-md text-center 
									px-2 py-1 text-primary-100 bg-neutral-100
							  		transition-300-out salut-button">
		<slot></slot>
	</RouterLink>
	<RouterLink to="#" v-else class="border border-white rounded-md text-neutral-100 text-center 
							  		 px-2 py-1 hover:text-primary-100 hover:bg-neutral-100
							  		 transition-300-out salut-button">
		<slot></slot>
	</RouterLink>
</template>

<style scoped>
.salut-button {
    min-width: 125px;
}
</style>
