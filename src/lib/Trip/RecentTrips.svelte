<script lang="ts">
	// your script goes here

	import TripCard from './TripCard.svelte'
</script>

<div class="px-8 lg:px-16">
	<div class="container">
		<h2 class="text-xl lg:text-2xl font-bold text-white uppercase">
			Nos récentes offres de voyages
		</h2>
		<div class="mt-16">
			<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
			</div>
			<div class="flex justify-center items-center">
				<a href="/" class="mt-20 cursor-pointer">
					<i class="fa-solid fa-circle-plus text-white text-4xl animate-bounce" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
