<script>
	import Carousel from '$lib/UI/Carousel.svelte'

	const items = [
		{
			path: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			id: 'image1'
		},
		{
			path: 'https://images.pexels.com/photos/1139040/pexels-photo-1139040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			id: 'image2'
		},
		{
			path: 'https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			id: 'image3'
		},
		{
			path: 'https://images.pexels.com/photos/1021073/pexels-photo-1021073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
			id: 'image4'
		},
		{
			path: 'https://images.pexels.com/photos/2300673/pexels-photo-2300673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
			id: 'image5'
		}
		// {path: 'images/image6.jpg', id: 'image6'},
	]
</script>

<div
	class="bg-white h-[300px] border-b-[1px] border-gray-200 flex flex-col justify-center items-center"
>
	<h1 class="text-neutral uppercase font-bold text-3xl lg:text-6xl">Découvrir</h1>
	<div class="h-[5px] mt-2 bg-primary w-48" />
</div>
<div class="px-8 lg:px-16">
	<div class="container">
		<!-- <div class="h-36" />
		<div class="">
			<Carousel carouselItems={items} carousel_type="images" displayControls={true} />
		</div> -->
	</div>
</div>

<style>
	/* your styles go here */
</style>
