<script>
	import GenericHero from '$lib/UI/GenericHero.svelte'

	import UserInfoSetting from './UserInfoSetting.svelte'

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
</div>

<style>
	/* your styles go here */
</style>
