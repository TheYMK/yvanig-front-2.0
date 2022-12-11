<script lang="ts">
		// @ts-nocheck
	export let origin: any = null
	export let origin_airport_code: any = null
	export let destination: any = null
	export let destination_airport_code: any = null
</script>

<div
	class="h-fit py-10 w-full bg-primary flex flex-col md:flex-row items-center justify-center space-x-4"
>
	<div class="font-bold text-white flex flex-row justify-center items-center space-x-2">
		<div class="bg-white h-8 w-8 rounded-full flex flex-row justify-center items-center">
			<i class="fa-solid fa-plane-departure text-primary text-sm" />
		</div>
		<span class="text-sm lg:text-md">{origin} ( {origin_airport_code} )</span>
	</div>
	<div class="flex flex-col md:flex-row justify-center items-center">
		<div class="h-24 w-[2px] md:h-[2px] md:w-24 bg-white " />
		<i class="fa-solid fa-plane text-white rotate-90 md:rotate-0" />
	</div>

	<div class="font-bold text-white flex flex-row justify-center items-center space-x-2">
		<div class="bg-white h-8 w-8 rounded-full flex flex-row justify-center items-center">
			<i class="fa-solid fa-plane-arrival text-sm text-primary" />
		</div>
		<span class="text-sm lg:text-md">{destination} ( {destination_airport_code} )</span>
	</div>
</div>

<style>
	/* your styles go here */
</style>
