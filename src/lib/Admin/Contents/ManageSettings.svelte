<script>
	import GenericHero from '$lib/UI/GenericHero.svelte'
	import SystemSetting from './SystemSetting.svelte'

	import UserInfoSetting from './UserInfoSetting.svelte'

	export let userRole = 'sysadmin'

	// your script goes here
</script>

<div class="text-neutral">
	<GenericHero
		title="Paramètres"
		titleClassName="text-xl lg:text-4xl"
		separatorClassName="w-48"
		containerClassName="h-[200px]"
	/>
	<div class="mt-20">
		<div>
			<h1 class="text-2xl font-bold">Mes informations</h1>
			<div class="h-[5px] mt-2 bg-primary w-36" />
		</div>
		<UserInfoSetting />
	</div>
	{#if userRole === 'sysadmin'}
		<div class="mt-20 mb-20">
			<div>
				<h1 class="text-2xl font-bold">Système</h1>
				<div class="h-[5px] mt-2 bg-primary w-36" />
			</div>
			<SystemSetting />
		</div>
	{/if}
</div>

<style>
	/* your styles go here */
</style>
