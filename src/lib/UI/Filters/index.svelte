<script lang="ts">
	import Input from '../Input.svelte'

	export let type = 'flights'

	let searchTerm = ''
	const onSearchTermChange = (e: any) => {
		searchTerm = e.target.value
	}
</script>

<div class="flex flex-row items-center w-full  gap-8">
	<!-- Search input -->
	<div class="w-96" class:hidden={type === 'flights'}>
		<Input
			label="Filtrer par terme"
			inputId="search"
			placeholder="Entrez un terme à chercher"
			type="text"
			value={searchTerm}
			on:input={onSearchTermChange}
		/>
	</div>
	<!-- Select a destination -->

	<!--  -->
</div>

<style>
	/* your styles go here */
</style>
