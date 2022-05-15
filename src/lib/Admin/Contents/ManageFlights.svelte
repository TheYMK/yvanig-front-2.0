<script lang="ts">
	import { notificationCenter } from '../../../config/notification'
	import { onMount } from 'svelte'
	import { api } from '../../../api/Api'
	import AddFlightModal from '../Modals/AddFlightModal.svelte'
	import ViewFlightModal from '../Modals/ViewFlightModal.svelte'
	import GenericHero from '$lib/UI/GenericHero.svelte'

	let flights = []
	let total = 0
	let page = 0
	let limit = 10
	let loading = false
	let isAddFlightModalOpened = false
	let isViewFlightModalOpened = false
	let selectedFlight = null

	const loadFlights = async (page: any, limit: any) => {
		loading = true
		try {
			const response = await api.getFlights(page, limit)
			flights = [...flights, ...response.data.flights]
			total = response.data?.total_count
		} catch (err) {
			console.log(err)
			notificationCenter.displayErrorNotification(
				'Une erreur est survenue lors du chargement des vols.'
			)
		} finally {
			loading = false
		}
	}

	const reloadFlight = () => {
		flights = []
		loadFlights(page, limit)
	}

	const loadMore = () => {
		page++
		loadFlights(page, limit)
	}

	onMount(() => {
		loadFlights(page, limit)
	})
</script>

<div class="text-neutral">
	<GenericHero
		title="Gestion des vols"
		titleClassName="text-xl lg:text-4xl"
		separatorClassName="w-48"
		containerClassName="h-[200px]"
	>
		<div slot="action" class="mt-10">
			<button class="btn btn-primary" on:click={() => (isAddFlightModalOpened = true)}
				>Ajouter un vol</button
			>
		</div>
	</GenericHero>

	<div class="mt-20">
		<div>
			<h1 class="text-2xl font-bold">Liste des vols</h1>
			<div class="h-[5px] mt-2 bg-primary w-36" />
		</div>
		<div class="mt-10">
			<p class="text-sm">Resultat: {flights.length} / {total} trouvés</p>
		</div>
		{#if flights.length === 0}
			<div class="text-center">
				<p>Aucun vol n'a été trouvé</p>
			</div>
		{:else}
			<div class="overflow-x-auto w-full mt-10">
				<table class="table w-full">
					<thead>
						<tr>
							<th>Compagnie / Numéro de vol</th>
							<th>Départ</th>
							<th>Destination</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{#each flights as flight, index}
							<tr>
								<td>
									<div class="flex items-center space-x-3">
										<div class="">
											<div class="w-12 h-12">
												<img src={flight.company_logo} alt="Vol" class="w-12 h-12 object-contain" />
											</div>
										</div>
										<div>
											<div class="font-bold">{flight.airline}</div>
											<div class="text-sm opacity-50">{flight.flight_number}</div>
										</div>
									</div>
								</td>
								<td>
									{flight.origin} ( {flight.origin_airport_code} )
									<br />
									<span class="badge badge-ghost badge-sm"
										>{flight.departure_date} ( {flight.departure_time} )</span
									>
								</td>
								<td>
									{flight.destination} ( {flight.destination_airport_code} )
									<br />
									<span class="badge badge-ghost badge-sm"
										>{flight.arrival_date} ( {flight.arrival_time} )</span
									>
								</td>
								<th>
									<button
										class="btn btn-primary btn-xs"
										on:click={() => {
											selectedFlight = flight
											isViewFlightModalOpened = true
										}}>Afficher</button
									>
								</th>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			{#if flights.length < total}
				<div class="flex justify-center items-center mt-20">
					<button class="btn btn-primary rounded-full w-48 text-xs mb-10" on:click={loadMore}>
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
							<span>Charger plus</span>
						{/if}
					</button>
				</div>
			{/if}
		{/if}
	</div>
</div>
<AddFlightModal bind:isAddFlightModalOpened {reloadFlight} />
<ViewFlightModal bind:isViewFlightModalOpened bind:selectedFlight {reloadFlight} />

<style>
	.table th:first-child {
		@apply relative z-0;
	}
</style>
