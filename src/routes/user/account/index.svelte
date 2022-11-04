<script>
	import Navbar from '$lib/Navbar/index.svelte'
	import Layout from '$lib/Layout.svelte'
	import Footer from '$lib/Footer/index.svelte'
	import { page } from '$app/stores'
	import { customer_menus } from '../../../config/constants'
	import CustomerGuard from '$lib/Guards/CustomerGuard.svelte'
	import CustomerSideBarMenu from '$lib/Customer/CustomerSideBarMenu.svelte'
	import Content from '$lib/Customer/Content.svelte'

	let activeMenu = customer_menus.OVERVIEW

	$: if ($page.url.hash) {
		activeMenu = $page.url.hash.replace('#', '')
		console.log(activeMenu)
	}
</script>

<Layout>
	<CustomerGuard>
		<Navbar sticky />
		<div class="grid grid-cols-4 h-full">
			<div class="col-span-4 md:col-span-1">
				<CustomerSideBarMenu bind:activeMenu />
			</div>
			<div class="w-full col-span-4 md:col-span-3 h-full">
				<Content contentType={activeMenu} />
			</div>
		</div>
		<div class="">
			<Footer />
		</div>
	</CustomerGuard>
</Layout>

<style>
	/* your styles go here */
</style>
