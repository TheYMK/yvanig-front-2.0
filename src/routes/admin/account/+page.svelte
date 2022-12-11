<script>
	// @ts-nocheck
	import Navbar from '../../../lib/Navbar/index.svelte'
	import AdminGuard from '../../../lib/Guards/AdminGuard.svelte'
	import Layout from '../../../lib/Layout.svelte'
	import AdminSideBarMenu from '../../../lib/Admin/AdminSideBarMenu.svelte'
	import Footer from '../../../lib/Footer/index.svelte'
	import { page } from '$app/stores'
	import Content from '../../../lib/Admin/Content.svelte'
	import { admin_menus } from '../../../config/constants'

	let activeMenu = admin_menus.OVERVIEW

	$: if ($page.url.hash) {
		activeMenu = $page.url.hash.replace('#', '')
		console.log(activeMenu)
	}
</script>

<Layout>
	<AdminGuard>
		<Navbar sticky />
		<div class="grid grid-cols-4 h-full">
			<div class="col-span-4 md:col-span-1">
				<AdminSideBarMenu bind:activeMenu />
			</div>
			<div class="w-full col-span-4 md:col-span-3">
				<Content contentType={activeMenu} />
			</div>
		</div>
		<div class="">
			<Footer />
		</div>
	</AdminGuard>
</Layout>

<style>
	/* your styles go here */
</style>
