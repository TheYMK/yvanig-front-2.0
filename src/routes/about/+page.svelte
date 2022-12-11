<script>
	import Layout from '../../lib/Layout.svelte';
	import Navbar from '../../lib/Navbar/index.svelte';
	import Footer from '../../lib/Footer/index.svelte';
	import GenericHero from '../../lib/UI/GenericHero.svelte';
</script>

<Layout>
	<Navbar darkLink={true} />
	<GenericHero
		title="À propos de nous"
		titleClassName="text-3xl lg:text-6xl"
		separatorClassName="w-48"
		containerClassName="h-[300px]"
	/>
	<div />
	<div class="mt-20">
		<Footer />
	</div>
</Layout>

<svelte:head>
	<title>Yvanig Agency - À Propos de nous</title>
</svelte:head>

<style>
	/* your styles go here */
</style>
