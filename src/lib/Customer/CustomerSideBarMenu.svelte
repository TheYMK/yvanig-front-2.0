<script>
	import { customer_menus } from '../../config/constants'

	import userStore from '../../stores/user'

	let isMobileMenuOpened = false
	export let activeMenu = customer_menus.BOOKINGS
</script>

<!-- On large size -->
<div class="border-r-[1px] border-gray-200 h-full hidden md:block">
	<div class="flex flex-col justify-center items-center h-28  border-b-[1px] border-gray-200">
		<h4 class="font-bold text-xl text-neutral">Tableau de bord</h4>
		<p class="mt-2 text-sm">{$userStore && $userStore.email} (Admin)</p>
		<div class="h-[5px] mt-2 bg-primary w-36" />
	</div>
	<ul class="menu text-neutral">
		<li class:bordered={activeMenu === customer_menus.BOOKINGS}>
			<a href={`#${customer_menus.BOOKINGS}`} class="hover:bg-primary hover:text-white"
				>Mes réservations</a
			>
		</li>
		<li class:bordered={activeMenu === customer_menus.SETTINGS}>
			<a href={`#${customer_menus.SETTINGS}`} class="hover:bg-primary hover:text-white"
				>Paramètres</a
			>
		</li>
	</ul>
</div>

<!-- On mobile size -->
<div class="block md:hidden px-8 mt-10 mb-10">
	<div
		class="w-full border-[1px] rounded-t-md flex flex-row justify-between items-center h-14 py-8 px-4"
	>
		<div>
			<label class="btn btn-circle btn-primary swap swap-rotate">
				<input type="checkbox" on:click={() => (isMobileMenuOpened = !isMobileMenuOpened)} />
				<!-- hamburger icon -->
				<svg
					class="swap-off fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 512 512"
					><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
				>
				<!-- close icon -->
				<svg
					class="swap-on fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 512 512"
					><polygon
						points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
					/></svg
				>
			</label>
		</div>
		<div class="">
			<h4 class="font-bold text-md text-neutral">Tableau de bord</h4>
		</div>
		<div />
	</div>
	{#if isMobileMenuOpened}
		<div class="h-fit border-b-[1px] border-x-[1px] border-gray-200">
			<ul class="menu text-neutral">
				<li class:bordered={activeMenu === customer_menus.BOOKINGS}>
					<a href={`#${customer_menus.BOOKINGS}`} class="hover:bg-primary hover:text-white"
						>Mes réservations</a
					>
				</li>
				<li class:bordered={activeMenu === customer_menus.SETTINGS}>
					<a href={`#${customer_menus.SETTINGS}`} class="hover:bg-primary hover:text-white"
						>Paramètres</a
					>
				</li>
			</ul>
		</div>
	{/if}
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
