<script>
		// @ts-nocheck
	import { notificationCenter } from '../../../config/notification'
	import { api } from '../../../api/Api'
	import { FlightStatuses } from '../../../config/constants'
	import moment from 'moment'

	export let isViewFlightModalOpened = false
	export let selectedFlight = null
	export let reloadFlight = null
	let loading = false

	const onRemoveflight = async () => {
		loading = true
		try {
			await api.removeFlight(selectedFlight.id)
			isViewFlightModalOpened = false
			reloadFlight()
			notificationCenter.displaySuccessNotification('Le vol a bien été supprimé.')
		} catch (err) {
			console.log(err)
			notificationCenter.displayErrorNotification(
				'Une erreur est survenue lors de la suppression du vol.'
			)
		} finally {
			loading = false
		}
	}
</script>

<div class="modal modal-bottom lg:modal-middle" class:modal-open={isViewFlightModalOpened}>
	<div class="modal-box relative w-full">
		<label
			for="my-modal-3"
			class="btn btn-sm btn-neutral text-white btn-circle absolute right-2 top-2"
			on:click={() => {
				selectedFlight = null
				isViewFlightModalOpened = false
			}}>✕</label
		>
		{#if selectedFlight}
			<h3 class="text-lg font-bold">Détail du vol</h3>
			<hr />
			<div class="py-4">
				<div class="flex justify-center">
					<div class="avatar indicator">
						<div
							class="mb-8 rounded-box w-28 h-28 ring ring-primary ring-offset-base-100 ring-offset-2"
						>
							<img src={selectedFlight.company_logo} alt="company logo" />
						</div>
					</div>
				</div>
				<div class="grid grid-cols-6 gap-8">
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Nom de la compagnie:</strong><br /> {selectedFlight.airline}</span
						>
					</div>
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Numéro de vol:</strong><br /> {selectedFlight.flight_number}</span
						>
					</div>
					<!--  -->
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Lieu d'origine:</strong><br /> {selectedFlight.origin}</span
						>
					</div>
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Lieu de destination:</strong><br /> {selectedFlight.destination}</span
						>
					</div>
					<!--  -->
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Aéroport d'origine:</strong><br />
							{selectedFlight.origin_airport_name} ( {selectedFlight.origin_airport_code} )</span
						>
					</div>
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Aéroport de destination:</strong><br />
							{selectedFlight.destination_airport_name} ( {selectedFlight.destination_airport_code} )</span
						>
					</div>
					<!--  -->
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Date et Heure de départ:</strong><br />{selectedFlight.departure_date} ( {selectedFlight.departure_time}
							)</span
						>
					</div>
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Date et Heure d'arrivée:</strong><br />
							{selectedFlight.arrival_date} ( {selectedFlight.arrival_time} )</span
						>
					</div>
					<!--  -->
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Capacité:</strong><br /> {selectedFlight.capacity} places</span
						>
					</div>
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Remboursable:</strong><br />
							{#if selectedFlight.refundable}
								<i class="fa-solid fa-circle-check text-green-600" />
							{:else}
								<i class="fa-solid fa-circle-xmark text-error" />
							{/if}</span
						>
					</div>
					<!--  -->
					<div class="col-span-6 lg:col-span-2">
						<span class="text-sm"
							><strong>Prix de base:</strong><br />
							{selectedFlight.seat_base_price}</span
						>
					</div>
					<div class="col-span-6 lg:col-span-2">
						<span class="text-sm"
							><strong>Prix premium:</strong><br /> {selectedFlight.seat_price_business_class}</span
						>
					</div>
					<div class="col-span-6 lg:col-span-2">
						<span class="text-sm"
							><strong>Prix ultime:</strong><br /> {selectedFlight.seat_price_first_class}</span
						>
					</div>
					<!--  -->
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Statut:</strong><br />
							<span
								class="uppercase"
								class:text-success={selectedFlight.status === FlightStatuses.SCHEDULED ||
									selectedFlight.status === FlightStatuses.ARRIVED ||
									selectedFlight.status === FlightStatuses.EXPECTED ||
									selectedFlight.status === FlightStatuses.LANDED ||
									selectedFlight.status === FlightStatuses.IN_AIR}
								class:text-error={selectedFlight.status === FlightStatuses.CANCELLED ||
									selectedFlight.status === FlightStatuses.DELAYED ||
									selectedFlight.status === FlightStatuses.DIVERTED ||
									selectedFlight.status === FlightStatuses.NO_TAKEOFF_INFO ||
									selectedFlight.status === FlightStatuses.PAST_FLIGHT ||
									selectedFlight.status === FlightStatuses.RECOVERY}>{selectedFlight.status}</span
							></span
						>
					</div>
					<div class="col-span-6 lg:col-span-3">
						<span class="text-sm"
							><strong>Mis à jours le:</strong><br />
							{moment(selectedFlight.updated_at).format('DD MMMM YYYY, h:mm:ss')}</span
						>
					</div>
					<!--  -->
					<div class="col-span-6">
						<span class="text-sm"
							><strong>Description:</strong><br /> {selectedFlight.description}</span
						>
					</div>
				</div>
				<div class="flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-4 mt-10">
					<a
						href={`/admin/account/flights/${selectedFlight.id}`}
						class="btn btn-primary rounded-full w-48 text-xs mt-4"
					>
						{#if loading}
							<div class="spin">
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
							<span>Modifier</span>
						{/if}
					</a>
					<button class="btn btn-error rounded-full w-48 text-xs mt-4" on:click={onRemoveflight}
						>{#if loading}
							<div class="spin">
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
							<span>Supprimer</span>
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
