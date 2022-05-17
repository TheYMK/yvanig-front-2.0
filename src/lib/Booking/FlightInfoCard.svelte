<script lang="ts">
	import { onMount } from 'svelte'
	import { ClassTypes, FlightStatuses } from '../../config/constants'
	import OfferCard from './OfferCard.svelte'
	import { createEventDispatcher } from 'svelte'
	import BookingCardHeader from './BookingCardHeader.svelte'

	export let flight = null
	let numberOfStandardSeatsAvailable = 0
	let numberOfPremiumSeatsAvailable = 0
	let numberOfUltimeSeatsAvailable = 0

	const dispatch = createEventDispatcher()

	onMount(() => {
		flight.seats.forEach((seat) => {
			if (seat.is_available) {
				if (seat.class_type === ClassTypes.ECONOMY) {
					numberOfStandardSeatsAvailable++
				} else if (seat.class_type === ClassTypes.BUSINESS) {
					numberOfPremiumSeatsAvailable++
				} else if (seat.class_type === ClassTypes.FIRST) {
					numberOfUltimeSeatsAvailable++
				}
			}
		})
	})
</script>

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
	<div
		class="badge gap-2 mt-10"
		class:badge-success={flight.status === FlightStatuses.SCHEDULED}
		class:badge-error={flight.status === FlightStatuses.CANCELLED ||
			flight.status === FlightStatuses.PAST_FLIGHT}
		class:badge-warning={flight.status === FlightStatuses.DELAYED ||
			flight.status === FlightStatuses.RECOVERY ||
			flight.status === FlightStatuses.DIVERTED ||
			flight.status === FlightStatuses.LANDED ||
			flight.status === FlightStatuses.IN_AIR ||
			flight.status === FlightStatuses.ARRIVED ||
			flight.status === FlightStatuses.EXPECTED ||
			flight.status === FlightStatuses.NO_TAKEOFF_INFO}
	>
		<span><i class="fa-solid fa-circle-info" /> Statut:</span>
		{flight.status}
	</div>
</div>

<div class="grid grid-cols-2 gap-8 mt-10 px-8 h-fit">
	<div class="col-span-2 lg:col-span-1 shadow-md h-full border-t-2 border-gray-100 p-10 space-y-8">
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
	<div class="col-span-2 h-full lg:col-span-1 space-y-2">
		<OfferCard
			type={ClassTypes.ECONOMY}
			{flight}
			numberOfSeatsAvailable={numberOfStandardSeatsAvailable}
			on:nextStep={(e) => {
				dispatch('nextStep', {
					type: e.detail.type
				})
			}}
		/>
		<OfferCard
			type={ClassTypes.BUSINESS}
			{flight}
			numberOfSeatsAvailable={numberOfPremiumSeatsAvailable}
			on:nextStep={(e) => {
				dispatch('nextStep', {
					type: e.detail.type
				})
			}}
		/>

		<OfferCard
			type={ClassTypes.FIRST}
			{flight}
			numberOfSeatsAvailable={numberOfUltimeSeatsAvailable}
			on:nextStep={(e) => {
				dispatch('nextStep', {
					type: e.detail.type
				})
			}}
		/>
	</div>
</div>

<style>
	/* your styles go here */
</style>
