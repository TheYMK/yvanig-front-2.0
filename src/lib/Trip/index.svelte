<script lang="ts">
	import Filters from '$lib/UI/Filters/index.svelte'
	import TripCard from './TripCard.svelte'

	// your script goes here
</script>

<div class="px-8 lg:px-16">
	<div class="container">
		<div class="flex flex-col w-fit">
			<h2 class="text-xl lg:text-2xl font-bold text-white uppercase">Nos offres de voyages</h2>
			<div class="h-[5px] mt-2 bg-white w-24 md:w-48 md:self-end" />
		</div>
		<div class="mt-16">
			<div class="mb-16">
				<Filters type="flights" />
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
			</div>

			<div class="flex justify-center items-center mt-20">
				<button class="btn btn-primary rounded-full w-48 text-xs animate-bounce"
					>Charger plus</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
