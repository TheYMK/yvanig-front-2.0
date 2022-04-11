<script lang="ts">
	import IslandCard from './IslandCard.svelte'
	// import ic_anjouan from '../../assets/icon/ic_anjouan.svg?url'
	// import ic_grandecomore from '../../assets/icon/ic_grandecomore.svg?url'
	// import ic_moheli from '../../assets/icon/ic_moheli.svg?url'
	// import ic_mayotte from '../../assets/icon/ic_mayotte.svg?url'

	import Carousel from '../UI/Carousel.svelte'
	const items = [
		{
			island_name: 'Anjouan',
			id: 'island1'
		},
		{
			island_name: 'Grande Comore',
			id: 'island2'
		},
		{
			island_name: 'Mohéli',
			id: 'island3'
		},
		{
			island_name: 'Mayotte',
			id: 'island4'
		}
	]
</script>

<div class="px-8 lg:px-16">
	<div class="container">
		<div class="flex flex-col w-fit">
			<h2 class="text-lg lg:text-2xl font-bold text-neutral uppercase">
				PARTEZ À LA DÉCOUVERTE DE NOS ÎLES AUX PARFUMS
			</h2>
			<div class="h-[5px] mt-2 bg-primary w-24 md:w-96 md:self-end" />
		</div>

		<div class="mt-16 hidden lg:block">
			<div class="grid grid-cols-4 gap-8">
				<div class="">
					<IslandCard island_name="Anjouan" />
				</div>
				<div>
					<IslandCard island_name="Grande Comore" />
				</div>
				<div>
					<IslandCard island_name="Mohéli" />
				</div>
				<div>
					<IslandCard island_name="Mayotte" />
				</div>
			</div>
		</div>
		<div class="lg:hidden mt-16">
			<Carousel carouselItems={items} displayControls={true} carousel_type="islands" />
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
