<script>
	import { ClassTypes } from '../../config/constants'

	import { createEventDispatcher } from 'svelte'
	import settingsStore from '../../stores/settingsStore'

	export let flight = null
	export let numberOfSeatsAvailable = 0
	export let type = ''

	const dispatch = createEventDispatcher()
</script>

<div
	class="stats text-primary-content w-full"
	class:bg-red-400={type === ClassTypes.ECONOMY}
	class:bg-blue-400={type === ClassTypes.BUSINESS}
	class:bg-black={type === ClassTypes.FIRST}
>
	<div class="stat">
		<div class="stat-title text-white">
			<i class="fa-solid fa-ticket-simple" />
			{#if type === ClassTypes.ECONOMY}
				Offre standard
			{:else if type === ClassTypes.BUSINESS}
				Offre premium
			{:else}
				Offre ultime
			{/if}
		</div>
		<div class="stat-value text-2xl lg:text-4xl">
			{#if type === ClassTypes.ECONOMY}
				{flight.seat_base_price} {$settingsStore && $settingsStore.default_currency}
			{:else if type === ClassTypes.BUSINESS}
				{flight.seat_price_business_class} {$settingsStore && $settingsStore.default_currency}
			{:else}
				{flight.seat_price_first_class} {$settingsStore && $settingsStore.default_currency}
			{/if}
		</div>
		<div class="stat-actions">
			<button
				class="btn btn-sm btn-success"
				disabled={numberOfSeatsAvailable === 0}
				on:click={() => {
					dispatch('nextStep', {
						type
					})
				}}>Choisir</button
			>
		</div>
	</div>
	<div class="stat">
		<div class="stat-title">Détails</div>
		<div class="flex flex-row justify-between">
			<span>Remboursable:</span>
			<span>
				{#if flight.refundable}
					<i class="fa-solid fa-circle-check" />
				{:else}
					<i class="fa-solid fa-circle-xmark" />
				{/if}
			</span>
		</div>
		<div class="flex flex-row justify-between">
			<span>Place disponible:</span>
			<span>{numberOfSeatsAvailable}</span>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
