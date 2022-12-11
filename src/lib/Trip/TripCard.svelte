<script lang="ts">
	export let trip_type = 'flight';
	export let departure_date = '20/02/2022';
	export let departure_time = '13:00';
	export let arrival_date = '20/02/2022';
	export let arrival_time = '16:00';
	export let origin = 'Anjouan';
	export let destination = 'Mohéli';
	export let company_logo = '';
	export let id = '';
	export let origin_airport_code = '';
	export let destination_airport_code = '';
</script>

<div class="trip-card w-full h-97 bg-white px-4">
	<div class="flex flex-col items-center">
		<div class="mt-6">
			<div class="w-24">
				<img src={company_logo} alt="company logo" class="object-contain" />
			</div>
		</div>
		<div class="mt-4">
			{#if trip_type === 'flight'}
				<i class="fa-solid fa-plane-departure text-neutral text-2xl" />
			{:else}
				<i class="fa-solid fa-ship text-neutral text-2xl" />
			{/if}
		</div>
		<div class="mt-4">
			<span class="text-neutral font-bold text-xs"
				>{origin} <i class="fa-solid fa-arrow-right" />
				{destination}</span
			>
		</div>
		<div class="grid grid-cols-2 gap-8 mt-4 place-items-center w-full">
			<div class="text-neutral">
				<span class="font-bold text-xs">Départ:</span>
				<br />
				<span class="text-xs">{departure_date}</span>
			</div>
			<div class="text-neutral">
				<span class="font-bold text-xs">Heure:</span>
				<br />
				<span class="text-xs">{departure_time}</span>
			</div>
			<!--  -->
			<div class="text-neutral">
				<span class="font-bold text-xs">Arrivée:</span>
				<br />
				<span class="text-xs">{arrival_date}</span>
			</div>
			<div class="text-neutral">
				<span class="font-bold text-xs">Heure:</span>
				<br />
				<span class="text-xs">{arrival_time}</span>
			</div>
		</div>
		<div class="my-8 self-center">
			<a href={`/bookflight/${id}`} class="btn btn-primary rounded lg:w-48 w-36 text-xs">Réserver</a
			>
		</div>
	</div>
</div>

<style>
	.trip-card {
		/* border: solid 1px rgba(255, 255, 255, 0.1); */
		border-radius: 15px;
		-moz-border-radius: 15px;
		-webkit-border-radius: 15px;
		/* background: rgba(255, 255, 255, 0.02); */
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
	}

	.avatar img {
		@apply bg-contain object-contain;
	}
</style>
