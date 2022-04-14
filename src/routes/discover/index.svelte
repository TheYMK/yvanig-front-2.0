<script lang="ts">
	import Navbar from '$lib/Navbar/index.svelte'
	import Footer from '$lib/Footer/index.svelte'
	import ExploreHero from '$lib/Hero/ExploreHero.svelte'
	import Hotel from '$lib/Hotel/index.svelte'
	import Trip from '$lib/Trip/index.svelte'
	import Layout from '$lib/Layout.svelte'
</script>

<Layout>
	<Navbar />
	<ExploreHero />
	<div class="mt-20">
		<Trip />
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
