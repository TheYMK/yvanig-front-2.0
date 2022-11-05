<script lang="ts">
	import {
		ClassTypes,
		DocumentTypes,
		FlightStatuses,
		Genders,
		PaymentMethods
	} from '../../config/constants'
	import userStore from '../../stores/user'
	import { createEventDispatcher } from 'svelte'
	import settingsStore from '../../stores/settingsStore'

	export let booking = null
	export let flight = null
	export let loading = false

	let seat = flight.seats.find((seat) => seat.id === booking.seatId)
	let acceptTermsAndConditions = false

	const dispatch = createEventDispatcher()
</script>

<div class="px-8 mt-10">
	<div class="flex flex-col items-center justify-center space-y-2">
		<div class="avatar mt-6">
			<div class="w-24 rounded-full">
				<img src={flight.company_logo} alt="company logo" />
			</div>
		</div>
		<div class="flex flex-col items-center justify-center space-y-2">
			<div class="text-xl font-bold">{flight.airline}</div>
			<div class="text-sm">
				№ de vol: <span class="font-semibold">{flight.flight_number}</span>
			</div>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-8 mt-10 px-8 h-fit">
		<div
			class="col-span-2 lg:col-span-1 shadow-md h-full border-t-2 border-gray-100 p-10 space-y-8"
		>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Aéroport d'origine:</span>
				<span>{flight.origin_airport_name} ( {flight.origin_airport_code} )</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Aéroport de destination:</span>
				<span>{flight.destination_airport_name} ( {flight.destination_airport_code} )</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Date et heure de départ:</span>
				<span>{flight.departure_date} ( {flight.departure_time} )</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Date et heure d'arrivée:</span>
				<span>{flight.arrival_date} ( {flight.arrival_time} )</span>
			</div>
			<div class="flex flex-col text-sm flex-wrap">
				<span class="font-bold">Informations additionnelles:</span>
				<span class="mt-5">{flight.description} </span>
			</div>
		</div>
		<div
			class="col-span-2 lg:col-span-1 shadow-md h-full border-t-2 border-gray-100 p-10 space-y-8"
		>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Offre sélectionnée:</span>
				<span>
					{#if booking.selectedOffer === ClassTypes.ECONOMY}
						Offre standard
					{:else if booking.selectedOffer === ClassTypes.BUSINESS}
						Offre premium
					{:else}
						Offre ultime
					{/if}
				</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Prix:</span>
				<span>
					{#if booking.selectedOffer === ClassTypes.ECONOMY}
						{flight.seat_base_price} {$settingsStore && $settingsStore.default_currency}
					{:else if booking.selectedOffer === ClassTypes.BUSINESS}
						{flight.seat_price_business_class} {$settingsStore && $settingsStore.default_currency}
					{:else}
						{flight.seat_price_first_class} {$settingsStore && $settingsStore.default_currency}
					{/if}
				</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Moyen de paiement séléctionné:</span>
				<span>
					{#if booking.payment_method === PaymentMethods.BANK_CARD}
						Carte bancaire
					{:else if booking.payment_method === PaymentMethods.MONEYGRAM}
						Moneygramm
					{:else if booking.payment_method === PaymentMethods.PAYPAL}
						Paypal
					{:else if booking.payment_method === PaymentMethods.WESTERN_UNION}
						Western Union
					{/if}
				</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Siège:</span>
				<span>{seat.seat_number}</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Nom et prénom:</span>
				<span
					>{booking.gender === Genders.MALE ? 'Mr' : 'Mme'}. {$userStore.last_name.toUpperCase()}
					{$userStore.first_name}</span
				>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Date de naissance:</span>
				<span>{booking.date_of_birth}</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Tel:</span>
				<span>{booking.phone_number}</span>
			</div>
			<div class="flex flex-row justify-between text-sm flex-wrap">
				<span class="font-bold">Type de document:</span>
				<span
					>{booking.document_type === DocumentTypes.PASSPORT ? 'Passeport' : "Carte d'identité"} ({booking.document_number})</span
				>
			</div>
		</div>
	</div>
	<div class="form-control mt-10 px-8">
		<label class="flex flex-row items-center gap-8">
			<input
				type="checkbox"
				checked={false}
				class="checkbox checkbox-primary"
				on:change={() => {
					acceptTermsAndConditions = !acceptTermsAndConditions
				}}
			/>
			<span class="label-text"
				>Accepter les <a href="/" class="font-semibold text-primary underline"
					>termes et conditions</a
				></span
			>
		</label>
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
				disabled={!acceptTermsAndConditions}
				on:click={(e) => {
					e.preventDefault()
					dispatch('nextStep', {})
				}}
				>{#if loading}
					En cours...
				{:else}
					Confirmer
				{/if} <i class="fa-solid fa-angle-right ml-2" /></button
			>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
