<script lang="ts">
	import FileUpload from '$lib/UI/FileUpload.svelte'

	import Input from '$lib/UI/Input.svelte'
	import { notificationCenter } from '../../../config/notification'
	import { FlightStatuses } from '../../../config/constants'
	import { api } from '../../../api/Api'

	export let isAddFlightModalOpened = false
	export let reloadFlight = null

	export let data = {
		airline: '',
		flight_number: '',
		origin_airport_code: '',
		destination_airport_code: '',
		capacity: 0,
		origin: '',
		destination: '',
		origin_airport_name: '',
		destination_airport_name: '',
		departure_time: '',
		arrival_time: '',
		departure_date: '',
		arrival_date: '',
		refundable: false,
		company_logo: '',
		description: '',
		seat_base_price: 0,
		seat_price_business_class: 0,
		seat_price_first_class: 0,
		status: ''
	}

	let images = []
	let loading = false

	const onSubmit = async (e: any) => {
		e.preventDefault()
		loading = true
		if (
			!data.airline ||
			!data.flight_number ||
			!data.origin_airport_code ||
			!data.destination_airport_code ||
			data.capacity <= 0 ||
			!data.origin ||
			!data.destination ||
			!data.origin_airport_name ||
			!data.destination_airport_name ||
			!data.departure_time ||
			!data.arrival_time ||
			!data.departure_date ||
			!data.arrival_date ||
			!data.description ||
			images.length === 0 ||
			data.seat_base_price <= 0 ||
			data.seat_price_business_class <= 0 ||
			data.seat_price_first_class <= 0
		) {
			loading = false
			return notificationCenter.displayErrorNotification('Veuillez remplir tous les champs.')
		}

		data = {
			...data,
			company_logo: images[0].url,
			status: FlightStatuses.SCHEDULED,
			capacity: parseInt(data.capacity.toString())
		}

		try {
			await api.createFlight(data)
			notificationCenter.displaySuccessNotification('Votre vol a bien été créé.')
			isAddFlightModalOpened = false
			data = {
				airline: '',
				flight_number: '',
				origin_airport_code: '',
				destination_airport_code: '',
				capacity: 0,
				origin: '',
				destination: '',
				origin_airport_name: '',
				destination_airport_name: '',
				departure_time: '',
				arrival_time: '',
				departure_date: '',
				arrival_date: '',
				refundable: false,
				company_logo: '',
				description: '',
				seat_base_price: 0,
				seat_price_business_class: 0,
				seat_price_first_class: 0,
				status: ''
			}
			images = []
			reloadFlight()
		} catch (err) {
			if (err.response?.data?.statusCode === 400) {
				notificationCenter.displayErrorNotification(
					"Nous n'avons pas réussi à créer votre vol. Veuillez vérifier les informations saisies."
				)
			} else {
				notificationCenter.displayErrorNotification('Une erreur est survenue.')
			}
		} finally {
			loading = false
		}
	}
</script>

<div class="modal modal-bottom lg:modal-middle" class:modal-open={isAddFlightModalOpened}>
	<div class="modal-box relative w-full">
		<label
			for="my-modal-3"
			class="btn btn-sm btn-neutral text-white btn-circle absolute right-2 top-2"
			on:click={() => (isAddFlightModalOpened = false)}>✕</label
		>
		<h3 class="text-lg font-bold">Ajouter un nouveau vol</h3>
		<div class="py-4">
			<FileUpload {images} placeholder="Veuillez telecharger le logo de la compagnie" />
			<form class="grid grid-cols-6 gap-8">
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Nom de la compagnie"
						isRequired
						inputId="airline"
						type="text"
						placeholder="AB Aviation"
						value={data.airline}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, airline: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Numéro de vol"
						isRequired
						inputId="flight_number"
						type="text"
						placeholder="AB-1234"
						value={data.flight_number}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, flight_number: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Pays d'origine"
						isRequired
						inputId="origin"
						type="text"
						placeholder="Comores"
						value={data.origin}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, origin: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Pays de destination"
						isRequired
						inputId="destination"
						type="text"
						placeholder="Tanzania"
						value={data.destination}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, destination: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Aéroport d'origine"
						isRequired
						inputId="origin_airport_name"
						type="text"
						placeholder="Hahaya Airport"
						value={data.origin_airport_name}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, origin_airport_name: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Code aéroport d'origine"
						isRequired
						inputId="origin_airport_code"
						type="text"
						placeholder="Hahaya Airport"
						value={data.origin_airport_code}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, origin_airport_code: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Aéroport de destination"
						isRequired
						inputId="destination_airport_name"
						type="text"
						placeholder="Julius Nyerere International Airport"
						value={data.destination_airport_name}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, destination_airport_name: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Code aéroport de destination"
						isRequired
						inputId="destination_airport_code"
						type="text"
						placeholder="Hahaya Airport"
						value={data.destination_airport_code}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, destination_airport_code: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Date de départ"
						isRequired
						inputId="departure_date"
						type="date"
						placeholder=""
						value={data.departure_date}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, departure_date: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Date d'arrivée"
						isRequired
						inputId="arrival_date"
						type="date"
						placeholder=""
						value={data.arrival_date}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, arrival_date: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Heure de départ"
						isRequired
						inputId="departure_time"
						type="time"
						placeholder=""
						value={data.departure_time}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, departure_time: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Heure d'arrivée"
						isRequired
						inputId="arrival_time"
						type="time"
						placeholder=""
						value={data.arrival_time}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, arrival_time: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-3">
					<Input
						label="Capacité maximum"
						isRequired
						inputId="capacity"
						type="number"
						min={0}
						placeholder=""
						value={data.capacity.toString()}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, capacity: e.target.value }
						}}
					/>
				</div>

				<div class="col-span-6 lg:col-span-3">
					<div class="form-control">
						<label class="label" for="refundable">
							<span class="label-text text-neutral font-medium"
								>Billet Remboursable

								<span class="text-red-500 ml-1">*</span>
							</span>
						</label>
						<input
							id="refundable"
							type="checkbox"
							class="toggle toggle-primary toggle-lg"
							checked={data.refundable}
							required
							value={data.refundable}
							on:change={() => (data = { ...data, refundable: !data.refundable })}
						/>
					</div>
				</div>

				<div class="col-span-6 lg:col-span-2">
					<Input
						label="Prix de base (économique)"
						isRequired
						inputId="seat_base_price"
						type="number"
						min={0}
						placeholder=""
						value={data.seat_base_price.toString()}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, seat_base_price: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-2">
					<Input
						label="Prix premium (business)"
						isRequired
						inputId="seat_price_business_class"
						type="number"
						min={0}
						placeholder=""
						value={data.seat_price_business_class.toString()}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, seat_price_business_class: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-2">
					<Input
						label="Prix ultime (première)"
						isRequired
						inputId="seat_price_first_class"
						type="number"
						min={0}
						placeholder=""
						value={data.seat_price_first_class.toString()}
						on:input={(e) => {
							// @ts-ignore
							data = { ...data, seat_price_first_class: e.target.value }
						}}
					/>
				</div>
				<div class="col-span-6 lg:col-span-6">
					<div class="form-control">
						<label class="label" for="description">
							<span class="label-text text-neutral font-medium"
								>Information additionnelle
								<span class="text-red-500 ml-1">*</span>
							</span>
						</label>
						<textarea
							id="description"
							required
							class="textarea textarea-bordered border-neutral w-full"
							placeholder="Décrivez votre vol"
							value={data.description}
							on:input={(e) => {
								// @ts-ignore
								data = { ...data, description: e.target.value }
							}}
						/>
					</div>
				</div>
			</form>
			<div class="text-center mt-10">
				<button
					disabled={!data.airline ||
						!data.flight_number ||
						!data.origin_airport_code ||
						!data.destination_airport_code ||
						data.capacity <= 0 ||
						!data.origin ||
						!data.destination ||
						!data.origin_airport_name ||
						!data.destination_airport_name ||
						!data.departure_time ||
						!data.arrival_time ||
						!data.departure_date ||
						!data.arrival_date ||
						!data.description ||
						images.length === 0 ||
						data.seat_base_price <= 0 ||
						data.seat_price_business_class <= 0 ||
						data.seat_price_first_class <= 0}
					on:click={onSubmit}
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
						<span>Ajouter</span>
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.modal-box {
		@apply max-w-[800px]/* 512px */;
	}
</style>
