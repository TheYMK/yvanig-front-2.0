<script>
		// @ts-nocheck
	export let title = ''
	export let titleClassName = ''
	export let separatorClassName = ''
	export let containerClassName = ''
</script>

<div
	class={`bg-white border-b-[1px] border-gray-200 flex flex-col justify-center items-center ${containerClassName}`}
>
	<h1 class={`text-neutral uppercase font-bold ${titleClassName}`}>{title}</h1>
	<div class={`h-[5px] mt-2 bg-primary ${separatorClassName}`} />
	<div class="flex justify-center">
		<slot name="action"><!-- optional fallback --></slot>
	</div>
</div>

<style>
	/* your styles go here */
</style>
