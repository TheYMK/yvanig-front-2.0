<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import Input from '../Input.svelte'

	let data = {
		origin: '',
		destination: '',
		departure_date: ''
	}

	let countries = ['Anjouan', 'Grande Comore', 'Moheli', 'Mayotte', 'Tanzanie']

	const onSearch = (e) => {
		e.preventDefault()
		window.location.href = `/discover?filterByOrigin=${data.origin}&filterByDestination=${data.destination}&filterByDepartureDate=${data.departure_date}`
	}

	const onClearFilter = (e) => {
		window.location.href = `/discover`
	}

	onMount(() => {
		data = { ...data, origin: $page.url.searchParams.get('filterByOrigin') ?? '' }
		data = { ...data, destination: $page.url.searchParams.get('filterByDestination') ?? '' }
		data = { ...data, departure_date: $page.url.searchParams.get('filterByDepartureDate') ?? '' }
	})
</script>

<div class="lg:flex flex-row gap-3 items-end hidden">
	<div class="form-control w-full">
		<label class="label" for="island_start">
			<span class="label-text">Filtrer par lieu de départ:</span>
		</label>
		<select
			id="island_start"
			class="select w-full select-bordered border-black"
			bind:value={data.origin}
		>
			<option disabled selected value="">Choisissez un lieu</option>
			{#each countries as country}
				<option disabled={country === data.destination} value={country}>{country}</option>
			{/each}
		</select>
	</div>
	<div class="form-control w-full">
		<label class="label" for="island_end">
			<span class="label-text">Filtrer par lieu de destination:</span>
		</label>
		<select
			id="island_end"
			class="select w-full select-bordered border-black"
			bind:value={data.destination}
		>
			<option disabled selected value="">Choisissez un lieu</option>
			{#each countries as country}
				<option disabled={country === data.origin} value={country}>{country}</option>
			{/each}
		</select>
	</div>
	<div class="form-control w-full">
		<label class="label" for="departure_date">
			<span class="label-text">Filtrer par date de départ souhaitée:</span>
		</label>
		<input
			id="departure_date"
			type="date"
			class="input input-bordered w-full border-black"
			bind:value={data.departure_date}
		/>
	</div>
	<div class="">
		<button class="btn btn-primary rounded w-48 text-xs" on:click={onSearch}>Filtrer</button>
	</div>
	<div class="">
		<button class="btn btn-danger rounded w-48 text-xs" on:click={onClearFilter}>Effacer</button>
	</div>
</div>

<style>
	/* your styles go here */
</style>
