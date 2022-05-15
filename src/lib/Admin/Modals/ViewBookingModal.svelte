<script lang="ts">
	import { BookingStatuses, ClassTypes } from '../../../config/constants'
	import moment from 'moment'

	export let isViewBookingModalOpened = false
	export let selectedBooking = null
	export let getUserInfoFromPassengerId: (passengerId: number) => Promise<any>
	export let onUpdateBookingStatus: (status: string) => Promise<void>
	export let onRemoveBooking: () => Promise<void>

	let loading = false
</script>

<div class="modal modal-bottom lg:modal-middle" class:modal-open={isViewBookingModalOpened}>
	<div class="modal-box relative w-full">
		<label
			for="my-modal-3"
			class="btn btn-sm btn-neutral text-white btn-circle absolute right-2 top-2"
			on:click={() => {
				selectedBooking = null
				isViewBookingModalOpened = false
			}}>✕</label
		>
		{#if selectedBooking}
			<h3 class="text-lg font-bold">Détail de la reservation</h3>

			<div class="mt-10">
				<h3 class="font-bold">Passager</h3>
				<hr class="mt-2" />
				<div class="grid grid-cols-2 mt-4 gap-4">
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Titre:</span>
						<br />
						<span>{selectedBooking.passenger.gender === 'male' ? 'Mr' : 'Mme'}</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Date de naissance:</span>
						<br />
						<span>{selectedBooking.passenger.date_of_birth}</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Nom de famille:</span>
						<br />
						{#await getUserInfoFromPassengerId(selectedBooking.passenger.id) then value}
							<span>{value.user.last_name}</span>
						{/await}
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Prénom:</span>
						<br />
						{#await getUserInfoFromPassengerId(selectedBooking.passenger.id) then value}
							<span>{value.user.first_name}</span>
						{/await}
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Email:</span>
						<br />
						{#await getUserInfoFromPassengerId(selectedBooking.passenger.id) then value}
							<span>{value.user.email}</span>
						{/await}
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Numéro de téléphone:</span>
						<br />
						<span>+330650578840</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Type de document:</span>
						<br />
						<span class="uppercase">{selectedBooking.passenger.document_type}</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Numéro du document:</span>
						<br />
						<span class="uppercase">{selectedBooking.passenger.document_number}</span>
					</div>
				</div>

				<h3 class="font-bold mt-10">Réservation</h3>
				<hr class="mt-2" />
				<div class="grid grid-cols-2 mt-4 gap-4">
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Compagnie aérienne:</span>
						<br />
						<span>{selectedBooking.flight.airline}</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Numéro du vol:</span>
						<br />

						<span>{selectedBooking.flight.flight_number}</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Départ:</span>
						<br />
						<span
							>{selectedBooking.flight.origin_airport_name} ({selectedBooking.flight
								.origin_airport_code}) - {selectedBooking.flight.origin}</span
						>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Destination:</span>
						<br />
						<span
							>{selectedBooking.flight.destination_airport_name} ({selectedBooking.flight
								.destination_airport_code}) - {selectedBooking.flight.destination}</span
						>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Date et Heure de départ:</span>
						<br />
						<span
							>{moment(selectedBooking.flight.departure_date).format('DD/MM/YYYY')} ({selectedBooking
								.flight.departure_time})</span
						>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Date et Heure d'arrivée:</span>
						<br />

						<span
							>{moment(selectedBooking.flight.arrival_date).format('DD/MM/YYYY')} ({selectedBooking
								.flight.arrival_time})</span
						>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Offre sélectionnée:</span>
						<br />
						<span>
							{#if selectedBooking.seat.class_type === ClassTypes.ECONOMY}
								{selectedBooking.price} KMF (Standard)
							{:else if selectedBooking.seat.class_type === ClassTypes.BUSINESS}
								{selectedBooking.price} KMF (Premium)
							{:else}
								{selectedBooking.price} KMF (Ultime)
							{/if}
						</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Siège sélectionné:</span>
						<br />

						<span>{selectedBooking.seat.seat_number}</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Remboursable:</span>
						<br />
						<span>
							{#if selectedBooking.flight.refundable}
								<i class="fa-solid fa-circle-check text-green-600" />
							{:else}
								<i class="fa-solid fa-circle-xmark text-error" />
							{/if}
						</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Date de réservation:</span>
						<br />
						<span>
							{moment(selectedBooking.created_at).format('DD/MM/YYYY')}
						</span>
					</div>
				</div>
				<div class="flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-4 mt-10">
					<button
						class="btn btn-success rounded-full w-48 text-xs mt-4"
						on:click={() =>
							selectedBooking.status === BookingStatuses.CONFIRMED
								? onRemoveBooking()
								: onUpdateBookingStatus('confirmed')}
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
							{selectedBooking.status === BookingStatuses.CONFIRMED ? 'Supprimer' : 'Confirmer'}
						{/if}
					</button>
					<button
						class="btn btn-error rounded-full w-48 text-xs mt-4"
						on:click={() =>
							selectedBooking.status === BookingStatuses.CANCELLED
								? onRemoveBooking()
								: onUpdateBookingStatus('cancelled')}
						>{#if loading}
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
							<span
								>{selectedBooking.status === BookingStatuses.CANCELLED
									? 'Supprimer'
									: 'Annuler'}</span
							>
						{/if}</button
					>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* your styles go here */
</style>
