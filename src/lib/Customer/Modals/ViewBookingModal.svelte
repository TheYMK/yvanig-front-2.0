<script lang="ts">
		// @ts-nocheck
	import { BookingStatuses, ClassTypes, PaymentMethods } from '../../../config/constants'
	import moment from 'moment'
	import settingsStore from '../../../stores/settingsStore'

	export let isViewBookingModalOpened = false
	export let selectedBooking = null
	export let getUserInfo: () => Promise<any>

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
				<h3 class="font-bold">Mes informations</h3>
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
						{#await getUserInfo() then value}
							<span>{value.last_name}</span>
						{/await}
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Prénom:</span>
						<br />
						{#await getUserInfo() then value}
							<span>{value.first_name}</span>
						{/await}
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Email:</span>
						<br />
						{#await getUserInfo() then value}
							<span>{value.email}</span>
						{/await}
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Numéro de téléphone:</span>
						<br />
						<span>{selectedBooking.passenger.phone_number}</span>
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
								{selectedBooking.price}
								{$settingsStore && $settingsStore.default_currency} (Standard)
							{:else if selectedBooking.seat.class_type === ClassTypes.BUSINESS}
								{selectedBooking.price}
								{$settingsStore && $settingsStore.default_currency} (Premium)
							{:else}
								{selectedBooking.price} {$settingsStore && $settingsStore.default_currency} (Ultime)
							{/if}
						</span>
					</div>
					<div class="space-y-4 col-span-2 lg:col-span-1">
						<span class="font-bold text-sm">Moyen de paiement:</span>
						<br />
						<span>
							{#if selectedBooking.payment_method === PaymentMethods.BANK_CARD}
								Carte bancaire
							{:else if selectedBooking.payment_method === PaymentMethods.MONEYGRAM}
								Moneygramm
							{:else if selectedBooking.payment_method === PaymentMethods.PAYPAL}
								Paypal
							{:else if selectedBooking.payment_method === PaymentMethods.WESTERN_UNION}
								Western Union
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
				<div
					class="flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-4 mt-10 text-sm"
				>
					<em
						>Vous souhaitez annuler cette réservation? <a
							href="/contact"
							class="font-bold text-primary underline">Contactez l'agence</a
						></em
					>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* your styles go here */
</style>
