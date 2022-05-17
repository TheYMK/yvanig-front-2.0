<script lang="ts">
	import { api } from '../../../api/Api'

	import { onMount } from 'svelte'

	let stats: any = null

	let loading = false

	const loadStats = async () => {
		loading = true

		try {
			const response = await api.getStats()
			stats = response.data

			console.log(stats)
		} catch (err) {}
	}

	onMount(() => {
		loadStats()
	})
</script>

{#if stats}
	<div class="stats stats-vertical lg:stats-horizontal shadow w-full mb-96">
		<div class="stat">
			<div
				class="stat-figure text-secondary cursor-pointer tooltip tooltip-top"
				data-tip={`Admin: ${stats.usersStats.total_admin} | Client: ${stats.usersStats.total_customer}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-8 h-8 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			</div>
			<div class="stat-title">Utilisateurs</div>
			<div class="stat-value">
				{stats.usersStats.total}
			</div>
		</div>
		<!--  -->
		<div class="stat">
			<div
				class="stat-figure text-secondary cursor-pointer tooltip tooltip-top"
				data-tip={`Programmé: ${stats.flightsStats.total_scheduled}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-8 h-8 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			</div>
			<div class="stat-title">Vols</div>
			<div class="stat-value">
				{stats.flightsStats.total}
			</div>
		</div>
		<!--  -->
		<div class="stat">
			<div
				class="stat-figure text-secondary cursor-pointer tooltip tooltip-left"
				data-tip={`Confirmée: ${stats.bookingsStats.total_confirmed} | Annulée: ${stats.bookingsStats.total_cancelled} | En attente: ${stats.bookingsStats.total_pending}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-8 h-8 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/></svg
				>
			</div>
			<div class="stat-title">Reservation</div>
			<div class="stat-value">
				{stats.bookingsStats.total}
			</div>
		</div>
	</div>
{/if}

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
