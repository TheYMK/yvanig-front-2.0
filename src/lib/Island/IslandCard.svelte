<script lang="ts">
	export let island_name = ''

	let showDetails = false
</script>

<div
	class={`island-card w-56 h-64 md-72 md-w-96 lg:w-full lg:h-96 bg-cover object-cover`}
	class:bg-anjouan-bg={island_name === 'Anjouan'}
	class:bg-grandecomore-bg={island_name === 'Grande Comore'}
	class:bg-moheli-bg={island_name === 'Mohéli'}
	class:bg-mayotte-bg={island_name === 'Mayotte'}
	on:mouseenter={() => (showDetails = true)}
	on:mouseleave={() => (showDetails = false)}
>
	<div class="hover:bg-neutral/50 w-full h-full flex flex-col items-center justify-center">
		<h1 class="text-white font-bold text-md lg:text-2xl text-center">{island_name}</h1>
		<h2 class="text-white font-medium text-xl mt-2">Comores</h2>

		<div class="w-24 bg-white h-[2px] mt-4" class:hidden={!showDetails} />
		<button
			class="btn btn-primary rounded-full lg:w-48 w-36 text-xs mt-8"
			class:hidden={!showDetails}>Découvrir</button
		>
	</div>
</div>

<style>
	.island-card {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
	}
</style>
