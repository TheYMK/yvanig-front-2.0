<script>
	import HotelCard from './HotelCard.svelte'
	import Filters from '$lib/UI/Filters/index.svelte'

	// your script goes here
</script>

<div class="px-8 lg:px-16">
	<div class="container">
		<div class="flex flex-col w-fit">
			<h2 class="text-xl lg:text-2xl font-bold text-neutral uppercase">
				Obtenez des offres exceptionnelles sur les hôtels partenaires
			</h2>
			<div class="h-[5px] mt-2 bg-primary w-24 md:w-48 md:self-end" />
		</div>
		<div class="mt-16">
			<div class="mb-16">
				<Filters type="hotel" />
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
				<HotelCard
					hotelLogo="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelName="Retaj Moroni"
					hotelImageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelPrice="222"
					hotelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad sapiente fugiat esse distinctio dolorem repellat, in ex nihil quo quisquam consequuntur blanditiis aperiam saepe facere. At, modi repellat."
					hotelRating={2}
				/>
				<HotelCard
					hotelLogo="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelName="Retaj Moroni"
					hotelImageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelPrice="222"
					hotelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad sapiente fugiat esse distinctio dolorem repellat, in ex nihil quo quisquam consequuntur blanditiis aperiam saepe facere. At, modi repellat."
					hotelRating={2}
				/>
				<HotelCard
					hotelLogo="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelName="Retaj Moroni"
					hotelImageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelPrice="222"
					hotelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad sapiente fugiat esse distinctio dolorem repellat, in ex nihil quo quisquam consequuntur blanditiis aperiam saepe facere. At, modi repellat."
					hotelRating={2}
				/>
				<HotelCard
					hotelLogo="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelName="Retaj Moroni"
					hotelImageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelPrice="222"
					hotelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad sapiente fugiat esse distinctio dolorem repellat, in ex nihil quo quisquam consequuntur blanditiis aperiam saepe facere. At, modi repellat."
					hotelRating={2}
				/>
				<HotelCard
					hotelLogo="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelName="Retaj Moroni"
					hotelImageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelPrice="222"
					hotelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad sapiente fugiat esse distinctio dolorem repellat, in ex nihil quo quisquam consequuntur blanditiis aperiam saepe facere. At, modi repellat."
					hotelRating={2}
				/>
				<HotelCard
					hotelLogo="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelName="Retaj Moroni"
					hotelImageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelPrice="222"
					hotelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad sapiente fugiat esse distinctio dolorem repellat, in ex nihil quo quisquam consequuntur blanditiis aperiam saepe facere. At, modi repellat."
					hotelRating={2}
				/>
				<HotelCard
					hotelLogo="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelName="Retaj Moroni"
					hotelImageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelPrice="222"
					hotelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad sapiente fugiat esse distinctio dolorem repellat, in ex nihil quo quisquam consequuntur blanditiis aperiam saepe facere. At, modi repellat."
					hotelRating={2}
				/>
				<HotelCard
					hotelLogo="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelName="Retaj Moroni"
					hotelImageUrl="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					hotelPrice="222"
					hotelDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima ad sapiente fugiat esse distinctio dolorem repellat, in ex nihil quo quisquam consequuntur blanditiis aperiam saepe facere. At, modi repellat."
					hotelRating={2}
				/>
			</div>

			<div class="flex justify-center items-center mt-20">
				<button class="btn btn-primary rounded-full w-48 text-xs animate-bounce"
					>Charger plus</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
