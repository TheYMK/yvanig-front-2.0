<script lang="ts">
	import Navbar from '$lib/Navbar/index.svelte'
	import Footer from '$lib/Footer/index.svelte'
	import Hotel from '$lib/Hotel/index.svelte'
	import Trip from '$lib/Trip/index.svelte'
	import Layout from '$lib/Layout.svelte'
	import { api } from '../../api/Api'
	import { notificationCenter } from '../../config/notification'
	import { onMount } from 'svelte'
	import GenericHero from '$lib/UI/GenericHero.svelte'

	let limit = 8
	let page = 0
	let loading = false
	let flights = []
	let total = 0

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

	const loadMore = () => {
		page++
		loadFlights(page, limit)
	}

	onMount(() => {
		loadFlights(page, limit)
	})
</script>

<Layout>
	<Navbar />
	<GenericHero
		title="Découvrir"
		titleClassName="text-3xl lg:text-6xl"
		separatorClassName="w-48"
		containerClassName="h-[300px]"
	/>
	<div class="mt-20">
		<Trip {flights} {loading} {total} on:loadMore={loadMore} />
	</div>
	<div class="mt-20">
		<Hotel />
	</div>
	<div class="mt-20">
		<Footer />
	</div>
</Layout>

<style>
	/* your styles go here */
</style>
