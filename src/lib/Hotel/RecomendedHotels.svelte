<script>
	// your script goes here

	import HotelCard from './HotelCard.svelte'
</script>

<div class="px-8 lg:px-16">
	<div class="container">
		<h2 class="text-xl lg:text-2xl font-bold text-white uppercase">
			NOS HÔTELIERS AUSSI ONT DES QUALITÉS INCROYABLES
		</h2>
		<div class="mt-16">
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
			</div>
			<div class="flex justify-center items-center">
				<a href="/" class="mt-20 cursor-pointer">
					<i class="fa-solid fa-circle-plus text-white text-4xl animate-bounce" />
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
