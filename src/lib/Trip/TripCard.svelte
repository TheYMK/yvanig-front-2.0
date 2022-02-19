<script lang="ts">
	export let trip_type = 'flight'
	export let departure_date = '20/02/2022'
	export let departure_hour = '13:00'
	export let arrival_date = '20/02/2022'
	export let arrival_hour = '16:00'
	export let start_location = 'Anjouan'
	export let end_location = 'Mohéli'
	export let company_logo = ''
</script>

<div class="trip-card w-full h-97 bg-neutral px-4">
	<div class="flex flex-col items-center">
		<div class="avatar mt-6">
			<div class="w-24 rounded-full">
				<img src="https://api.lorem.space/image/face?hash=92310" alt="company logo" />
			</div>
		</div>
		<div class="mt-4">
			{#if trip_type === 'flight'}
				<i class="fa-solid fa-plane-departure text-white text-2xl" />
			{:else}
				<i class="fa-solid fa-ship text-white text-2xl" />
			{/if}
		</div>
		<div class="mt-4">
			<span class="text-white font-bold text-xs"
				>{start_location} <i class="fa-solid fa-arrow-right" /> {end_location}</span
			>
		</div>
		<div class="grid grid-cols-2 gap-8 mt-4 place-items-center w-full">
			<div class="text-white">
				<span class="font-bold text-xs">Départ:</span>
				<br />
				<span class="text-xs">{departure_date}</span>
			</div>
			<div class="text-white">
				<span class="font-bold text-xs">Heure:</span>
				<br />
				<span class="text-xs">{departure_hour}</span>
			</div>
			<!--  -->
			<div class="text-white">
				<span class="font-bold text-xs">Arrivée:</span>
				<br />
				<span class="text-xs">{arrival_date}</span>
			</div>
			<div class="text-white">
				<span class="font-bold text-xs">Heure:</span>
				<br />
				<span class="text-xs">{arrival_hour}</span>
			</div>
		</div>
		<div class="my-8 self-center">
			<button class="btn btn-primary rounded lg:w-48 w-36 text-xs">Réserver</button>
		</div>
	</div>
</div>

<style>
	.trip-card {
		/* border: solid 1px rgba(255, 255, 255, 0.1); */
		border-radius: 15px;
		-moz-border-radius: 15px;
		-webkit-border-radius: 15px;
		background: rgba(255, 255, 255, 0.02);
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
	}
</style>
