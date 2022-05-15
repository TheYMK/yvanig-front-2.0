<script lang="ts">
	import Navbar from '$lib/Navbar/index.svelte'
	import Hero from '$lib/Hero/index.svelte'
	import Island from '$lib/Island/index.svelte'
	import Footer from '$lib/Footer/index.svelte'
	import AboutUs from '$lib/AboutUs/index.svelte'
	import RecentTrips from '$lib/Trip/RecentTrips.svelte'
	import Layout from '$lib/Layout.svelte'
	import { onMount } from 'svelte'
	import { api } from '../api/Api'
	import { notificationCenter } from '../config/notification'

	let limit = 5
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

	onMount(async () => {
		loadFlights(page, limit)
	})
</script>

<Layout>
	<Navbar />
	<Hero />
	<div class="mt-14">
		<Island />
	</div>
	<div class="mt-20">
		<RecentTrips {flights} {loading} />
	</div>
	<div class="mt-20">
		<AboutUs />
	</div>

	<div class="mt-20">
		<Footer />
	</div>
</Layout>

<style>
	/* your styles go here */
</style>
