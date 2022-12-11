<script lang="ts">
	import { page } from '$app/stores';

	import Layout from '../../../lib/Layout.svelte';
	import Navbar from '../../../lib/Navbar/index.svelte';
	import Footer from '../../../lib/Footer/index.svelte';
	import { notificationCenter } from '../../../config/notification';
	import { onMount } from 'svelte';
	import { api } from '../../../api/Api';
	import GenericHero from '../../../lib/UI/GenericHero.svelte';
	import BookingStepper from '../../../lib/Booking/BookingStepper.svelte';
	import FlightInfoCard from '../../../lib/Booking/FlightInfoCard.svelte';
	import { ClassTypes } from '../../../config/constants';
	import PassengerInfoCard from '../../../lib/Booking/PassengerInfoCard.svelte';
	import SeatOptionsCard from '../../../lib/Booking/SeatOptionsCard.svelte';
	import { initBookingStore } from '../../../stores/initStore';
	import bookingStore, { getBookingStoreValues } from '../../../stores/bookingStore';
	import PaymentCard from '../../../lib/Booking/PaymentCard.svelte';
	import BookingCardHeader from '../../../lib/Booking/BookingCardHeader.svelte';
	import ConfirmationCard from '../../../lib/Booking/ConfirmationCard.svelte';
	import { goto } from '$app/navigation';

	let flight: any = null;
	let currentStep = 1;
	let loading = false;

	let bookingValues = {
		document_type: null,
		document_number: null,
		phone_number: null,
		date_of_birth: null,
		gender: null,
		booking_type: 'flight',
		flightId: null,
		seatId: null,
		selectedOffer: null,
		payment_method: null
	};

	bookingStore.subscribe((store) => {
		bookingValues = store.bookingCache;
		currentStep = store.currentStep;
	});

	const loadFight = async (id: string) => {
		try {
			const response = await api.getFlight(id);
			flight = response.data;
			bookingValues = {
				...bookingValues,
				flightId: flight.id
			};
		} catch (err) {
			console.log(err);
			notificationCenter.displayErrorNotification(
				"Nous n'avons pas pu charger les informations de vol. Veuillez réessayer plus tard."
			);
		}
	};

	const onNextStep = async (e: any) => {
		if (currentStep === 1) {
			if (flight) {
				if (e.detail.type === ClassTypes.ECONOMY) {
					bookingStore.updateBooking({ ...bookingValues, selectedOffer: ClassTypes.ECONOMY });
				} else if (e.detail.type === ClassTypes.BUSINESS) {
					bookingStore.updateBooking({ ...bookingValues, selectedOffer: ClassTypes.BUSINESS });
				} else if (e.detail.type === ClassTypes.FIRST) {
					bookingStore.updateBooking({ ...bookingValues, selectedOffer: ClassTypes.FIRST });
				}
			}
			return;
		}
		if (currentStep === 2) {
			if (
				!e.detail.document_type ||
				!e.detail.document_number ||
				!e.detail.phone_number ||
				!e.detail.date_of_birth ||
				!e.detail.gender
			) {
				notificationCenter.displayErrorNotification('Vous devez remplir tous les champs.');
				return;
			}

			bookingStore.updateBooking({ ...bookingValues, ...e.detail });
			return;
		}

		if (currentStep === 3) {
			if (!e.detail.seatId) {
				notificationCenter.displayErrorNotification('Vous devez choisir une place.');
				return;
			}
			bookingStore.updateBooking({ ...bookingValues, ...e.detail });
			return;
		}

		if (currentStep === 4) {
			if (!e.detail.payment_method) {
				notificationCenter.displayErrorNotification('Vous devez choisir un méthode de paiement.');
				return;
			}

			bookingStore.updateBooking({ ...bookingValues, ...e.detail });
			return;
		}

		if (currentStep === 5) {
			if (
				!bookingValues.document_type ||
				!bookingValues.document_number ||
				!bookingValues.phone_number ||
				!bookingValues.date_of_birth ||
				!bookingValues.gender ||
				!bookingValues.booking_type ||
				!bookingValues.flightId ||
				!bookingValues.seatId ||
				!bookingValues.selectedOffer ||
				!bookingValues.payment_method
			) {
				notificationCenter.displayErrorNotification(
					'Un ou plusieurs champs sont manquants. Veuillez les remplir.'
				);
				return;
			}

			try {
				loading = true;
				const response = await api.createBooking(bookingValues);

				notificationCenter.displaySuccessNotification(
					'Votre réservation a bien été enregistrée. Vous serez contacté dans les plus brefs délais.'
				);

				bookingStore.resetBooking();
				goto('/');
			} catch (err) {
				console.log('[bookingFlight/:id]', err);
				notificationCenter.displayErrorNotification(
					"Nous n'avons pas pu finaliser votre réservation. Veuillez réessayer plus tard."
				);
			} finally {
				loading = false;
			}
		}
	};

	onMount(async () => {
		if ($page.params.id) {
			await initBookingStore($page.params.id);
			loadFight($page.params.id);
		}
	});

	const onPreviousStep = (e: any) => {
		if (currentStep === 2) {
			bookingStore.updateBooking({ ...bookingValues, selectedOffer: null });
		}
		if (currentStep === 3) {
			bookingStore.updateBooking({
				...bookingValues,
				document_type: null,
				document_number: null,
				phone_number: null,
				date_of_birth: null,
				gender: null
			});
		}
		if (currentStep === 4) {
			bookingStore.updateBooking({
				...bookingValues,
				seatId: null
			});
		}

		if (currentStep === 5) {
			bookingStore.updateBooking({
				...bookingValues,
				payment_method: null
			});
		}
	};
</script>

<svelte:head>
	<title>Yvanig Agency - Résérvation</title>
</svelte:head>

<Layout>
	<Navbar sticky />
	<GenericHero
		title="Effectuer une réservation"
		titleClassName="text-2xl lg:text-3xl text-center"
		separatorClassName="w-48"
		containerClassName="h-[100px]"
	/>

	<div class="mt-20 px-8 lg:px-16">
		<!--  -->
		<BookingStepper {currentStep} />
		<!--  -->
		{#if flight}
			<div class="bg-white h-full w-full mt-10 shadow-md pb-10">
				<BookingCardHeader
					origin={flight.origin}
					origin_airport_code={flight.origin_airport_code}
					destination={flight.destination}
					destination_airport_code={flight.destination_airport_code}
				/>
				{#if currentStep === 1}
					<FlightInfoCard {flight} on:nextStep={onNextStep} />
				{/if}

				{#if currentStep === 2}
					<PassengerInfoCard {flight} on:previous={onPreviousStep} on:nextStep={onNextStep} />
				{/if}

				{#if currentStep === 3}
					<SeatOptionsCard
						{flight}
						selectedOffer={bookingValues.selectedOffer}
						on:previous={onPreviousStep}
						on:nextStep={onNextStep}
					/>
				{/if}

				{#if currentStep === 4}
					<PaymentCard
						{flight}
						selectedSeat={bookingValues.seatId}
						selectedOffer={bookingValues.selectedOffer}
						on:previous={onPreviousStep}
						on:nextStep={onNextStep}
					/>
				{/if}
				{#if currentStep === 5}
					<ConfirmationCard
						{flight}
						booking={bookingValues}
						{loading}
						on:previous={onPreviousStep}
						on:nextStep={onNextStep}
					/>
				{/if}
			</div>
		{/if}
	</div>
	<div class="mt-20">
		<Footer />
	</div>
</Layout>

<style>
</style>
