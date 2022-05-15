<script>
	import { admin_menus } from '../../config/constants'
	import ManageBookings from './Contents/ManageBookings.svelte'
	import ManageFlights from './Contents/ManageFlights.svelte'

	export let contentType = admin_menus.OVERVIEW
</script>

<div class="md:py-20 px-8">
	{#if contentType === admin_menus.FLIGHTS}
		<ManageFlights />
	{/if}
	{#if contentType === admin_menus.BOOKINGS}
		<ManageBookings />
	{/if}
</div>

<style>
	/* your styles go here */
</style>
