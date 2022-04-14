<script lang="ts">
	// your script goes here

	import TripCard from './TripCard.svelte'
</script>

<div class="px-8 lg:px-16">
	<div class="container">
		<div class="flex flex-col w-fit">
			<h2 class="text-lg lg:text-2xl font-bold text-neutral uppercase">
				Nos récentes offres de voyages
			</h2>
			<div class="h-[5px] mt-2 bg-primary w-24 md:w-72 md:self-end" />
		</div>

		<div class="mt-16">
			<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
			</div>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
