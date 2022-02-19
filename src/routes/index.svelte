<script lang="ts">
	import Navbar from '$lib/Navbar/index.svelte'
	import Hero from '$lib/Hero/index.svelte'
	import Island from '$lib/Island/index.svelte'
	import Footer from '$lib/Footer/index.svelte'
	import RecomendedHotels from '$lib/Hotel/RecomendedHotels.svelte'
	import AboutUs from '$lib/AboutUs/index.svelte'
	import RecentTrips from '$lib/Trip/RecentTrips.svelte'
</script>

<Navbar />
<Hero />
<div class="mt-14">
	<Island />
</div>
<div class="mt-20">
	<RecomendedHotels />
</div>
<div class="mt-20">
	<AboutUs />
</div>
<div class="mt-20">
	<RecentTrips />
</div>
<div class="mt-20">
	<Footer />
</div>

<style>
	/* your styles go here */
</style>
