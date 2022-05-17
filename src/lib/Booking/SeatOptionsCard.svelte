<script lang="ts">
	import { api } from '../../api/Api'
	import { notificationCenter } from '../../config/notification'
	import { onMount } from 'svelte'
	import seat from '../../assets/icon/ic_seat.svg?url'
	import { createEventDispatcher } from 'svelte'

	export let flight = null
	export let selectedOffer = null

	let seats = []
	let selectedSeatId = null
	const dispatch = createEventDispatcher()

	const loadSeats = async () => {
		try {
			const response = await api.getSeats()

			if (response.data.length > 0) {
				seats = response.data.filter(
					(seat) =>
						seat.flightId === flight.id &&
						seat.class_type === selectedOffer &&
						seat.is_available === true
				)
			}
		} catch (err) {
			console.log(err)
			notificationCenter.displayErrorNotification(
				"Nous n'avons pas pu charger les informations de vol. Veuillez réessayer plus tard."
			)
		}
	}

	onMount(() => {
		loadSeats()
	})
</script>

<div class="">
	<div class="overflow-x-auto">
		<table class="table w-full">
			<!-- head -->
			<thead>
				<tr>
					<th>Numéro du siège</th>
					<th>Disponibilité</th>
					<th>Classe</th>
					<th>Choix</th>
				</tr>
			</thead>
			<tbody>
				{#each seats as seat}
					<tr>
						<td>{seat.seat_number}</td>
						<td>
							{#if seat.is_available}
								<i class="fa-solid fa-circle-check text-green-600" />
							{:else}
								<i class="fa-solid fa-circle-xmark text-error" />
							{/if}
						</td>
						<td class="uppercase">{seat.class_type}</td>
						<td class="uppercase">
							<input
								type="radio"
								name="seat"
								class="radio radio-primary"
								checked={selectedSeatId === seat.id}
								on:click={() => {
									selectedSeatId = seat.id
								}}
							/>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="col-span-2 flex flex-row space-x-2 justify-center mt-10">
		<div class="btn-group grid grid-cols-2">
			<button
				class="btn btn-neutral"
				on:click={(e) => {
					e.preventDefault()
					dispatch('previous')
				}}><i class="fa-solid fa-angle-left mr-2" /> Précédent</button
			>
			<button
				class="btn btn-primary"
				disabled={!selectedSeatId}
				on:click={(e) => {
					e.preventDefault()
					dispatch('nextStep', {
						seatId: selectedSeatId
					})
				}}>Paiement <i class="fa-solid fa-angle-right ml-2" /></button
			>
		</div>
	</div>
</div>

<style>
	.table th:first-child {
		@apply relative z-0;
	}
</style>
