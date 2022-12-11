<script>
	export let title = '';
	export let description = '';
	export let image = '';
	export let link = '';
	export let bgLeft = false;
</script>

<div class="w-full grid grid-cols-2 gap-10 md:gap-0">
	<div
		class="bg-primary h-[200px] md:h-[400px] md:col-span-1 col-span-2 {bgLeft === false
			? 'md:order-last'
			: ''}"
	>
		<img src={image} alt="" class="object-cover w-full h-full service-background" />
	</div>
	<div class="h-96 w-full md:col-span-1 col-span-2 flex flex-col items-center justify-center px-4">
		<h1 class="self-start mb-10 font-bold uppercase">{title}</h1>
		<p class="text-justify">
			{@html description}
		</p>
		<!-- <a href={link} class="self-start btn btn-primary rounded-full mt-14 w-48 text-sm">Voir plus</a> -->
	</div>
</div>

<style>
	.service-background {
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
