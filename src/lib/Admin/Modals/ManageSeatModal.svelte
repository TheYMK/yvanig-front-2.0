<script lang="ts">
	import Input from '$lib/UI/Input.svelte'
	import { notificationCenter } from '../../../config/notification'
	import { api } from '../../../api/Api'
	import { ClassTypes } from '../../../config/constants'
	import { onMount } from 'svelte'

	export let isManageSeatModalOpened = false
	export let flightId = ''

	let seats = []

	let data: any = {
		seat_number: '',
		is_available: true,
		class_type: 'economy',
		flightId: ''
	}

	let isInUpdateMode = false
	let currentSeatId = null
	let loading = false

	const loadSeats = async () => {
		loading = true
		try {
			const response = await api.getSeats()
			if (response.data && response.data.length > 0) {
				seats = response.data.filter((seat) => seat.flightId == flightId)
			} else {
				seats = []
			}
		} catch (err) {
			notificationCenter.displayErrorNotification(
				"Nous n'avons pas pu charger les places pour ce vol"
			)
		} finally {
			loading = false
		}
	}

	const onSubmit = async (e: any) => {
		e.preventDefault()
		loading = true
		if (!data.seat_number || !data.class_type) {
			notificationCenter.displayErrorNotification('Veuillez remplir tous les champs')
			loading = false
			return
		}

		try {
			data = { ...data, flightId: parseInt(flightId) }

			await api.createSeat(data)

			data = {
				seat_number: '',
				is_available: true,
				class_type: 'economy',
				flightId: ''
			}
			notificationCenter.displaySuccessNotification('La place a été créée avec succès')
			loadSeats()
		} catch (err) {
			notificationCenter.displayErrorNotification("Nous n'avons pas pu créer la place")
		} finally {
			loading = false
		}
	}

	const loadInputInfo = (seat) => {
		currentSeatId = seat.id
		data.seat_number = seat.seat_number
		data.is_available = seat.is_available
		data.class_type = seat.class_type
		isInUpdateMode = true
	}

	const onRemoveSeat = async (id: any) => {
		loading = true

		try {
			await api.removeSeat(id)
			notificationCenter.displaySuccessNotification('La place a été supprimée avec succès')
			loadSeats()
		} catch (err) {
			notificationCenter.displayErrorNotification("Nous n'avons pas pu supprimer la place")
		} finally {
			loading = false
		}
	}

	const onUpdateSeat = async (e: any) => {
		e.preventDefault()

		loading = true

		if (!data.seat_number || !data.class_type) {
			notificationCenter.displayErrorNotification('Veuillez remplir tous les champs')
			loading = false
			return
		}

		try {
			data = { ...data, flightId: parseInt(flightId) }

			await api.updateSeat(currentSeatId, data)

			notificationCenter.displaySuccessNotification('La place a été modifiée avec succès')
			data = {
				seat_number: '',
				is_available: true,
				class_type: 'economy',
				flightId: ''
			}
			isInUpdateMode = false
			currentSeatId = null
			loadSeats()
		} catch (err) {
			notificationCenter.displayErrorNotification("Nous n'avons pas pu modifier la place")
		} finally {
			loading = false
		}
	}

	onMount(() => {
		loadSeats()
	})
</script>

<div class="modal modal-bottom lg:modal-middle" class:modal-open={isManageSeatModalOpened}>
	<div class="modal-box relative w-full">
		<label
			for="my-modal-3"
			class="btn btn-sm btn-neutral text-white btn-circle absolute right-2 top-2"
			on:click={() => {
				isManageSeatModalOpened = false
			}}>✕</label
		>
		<h3 class="text-lg font-bold">Gérer les sièges pour ce vol</h3>
		<div class="py-4">
			<form class="grid grid-cols-3 gap-8 mt-10">
				<div class="col-span-3 lg:col-span-1">
					<Input
						label="Numéro du siège"
						isRequired
						inputId="seat_number"
						type="text"
						placeholder="A01"
						value={data.seat_number}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, seat_number: e.target.value }
						}}
					/>
				</div>

				<div class="form-control col-span-3 lg:col-span-1">
					<label class="label" for="class_type">
						<span class="label-text text-neutral font-medium"
							>Type de classe
							<span class="text-red-500 ml-1">*</span>
						</span>
					</label>
					<select
						id="class_type"
						class="input input-bordered border-neutral w-full"
						value={data.class_type}
						on:change={(e) => {
							// @ts-ignore
							data = { ...data, class_type: e.target.value }
						}}
					>
						<option value="" disabled>Veuillez choisir une classe</option>
						<option value={ClassTypes.ECONOMY}>Économique</option>
						<option value={ClassTypes.BUSINESS}>Affaire</option>
						<option value={ClassTypes.FIRST}>Première</option>
					</select>
				</div>

				<div class="form-control col-span-3 lg:col-span-1">
					<label class="label" for="is_available">
						<span class="label-text text-neutral font-medium"
							>Disponible

							<span class="text-red-500 ml-1">*</span>
						</span>
					</label>
					<input
						id="is_available"
						type="checkbox"
						class="toggle toggle-primary toggle-lg"
						checked={data.is_available}
						required
						value={data.is_available}
						on:change={() => (data = { ...data, is_available: !data.is_available })}
					/>
				</div>
				<div class="col-span-3">
					<div class="text-center self-start">
						<button
							disabled={!data.seat_number}
							on:click={isInUpdateMode ? onUpdateSeat : onSubmit}
							class="btn btn-primary rounded-full w-48 text-xs mt-4"
						>
							{#if loading}
								<div class="animate-spin">
									<svg
										role="status"
										class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-primary"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
								</div>
							{:else}
								<span>{isInUpdateMode ? 'Modifier' : 'Ajouter'}</span>
							{/if}
						</button>
						{#if isInUpdateMode}
							<div>
								<span
									class="underline text-primary text-sm cursor-pointer"
									on:click={() => {
										data = {
											seat_number: '',
											is_available: true,
											class_type: 'economy',
											flightId: ''
										}
										isInUpdateMode = false
										currentSeatId = null
									}}>Annuler</span
								>
							</div>
						{/if}
					</div>
				</div>
			</form>

			<!-- List seats -->
			<div class="overflow-x-auto w-full mt-10">
				<table class="table w-full">
					<thead>
						<tr>
							<th>Numéro de siège</th>
							<th>Type de classe</th>
							<th>Disponibilité</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{#each seats as seat}
							<tr>
								<td>
									{seat.seat_number}
								</td>
								<td>
									{#if seat.class_type === 'economy'}
										Economique
									{:else if seat.class_type === 'business'}
										Affaire
									{:else}
										Première
									{/if}
								</td>
								<td>
									{#if seat.is_available}
										<i class="fa-solid fa-circle-check text-green-600" />
									{:else}
										<i class="fa-solid fa-circle-xmark text-error" />
									{/if}
								</td>
								<th>
									<button class="btn btn-primary btn-xs" on:click={() => loadInputInfo(seat)}
										>Modifier</button
									>
									<button class="btn btn-error btn-xs" on:click={() => onRemoveSeat(seat.id)}
										>Supprimer</button
									>
								</th>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-box {
		@apply max-w-[800px]/* 512px */;
	}
</style>
