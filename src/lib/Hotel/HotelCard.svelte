<script>
	export let hotelName = ''
	export let hotelImageUrl = ''
	export let hotelLogo = ''
	export let hotelPrice = ''
	export let hotelRating = null
	export let hotelDescription = ''
</script>

<div class="hotel mycard h-480 relative p-5 flex flex-col">
	<div class="author absolute inline-block z-10">
		<div class="avatar">
			<div class="mb-8 w-12 h-12 ring ring-primary ring-offset-2 rounded-btn">
				<img src={hotelLogo} alt="hotel logo" />
			</div>
		</div>
	</div>
	<div class="hotel_wrap w-full flex items-center justify-center text-center my-6">
		<a href="/" class="w-full">
			<img
				src={hotelImageUrl}
				class="hotel_preview w-full h-250 object-cover rounded-md"
				alt="hotel"
			/>
		</a>
	</div>
	<div class="h-full flex flex-col justify-between">
		<div class="">
			<!-- title -->
			<a href="/">
				<h4 class="text-white font-bold">{hotelName}</h4>
			</a>
			<!-- description -->
			<div class="text-white text-md">
				<span>{hotelDescription && hotelDescription.substring(0, 50)}...</span>
			</div>
		</div>
		<div class="flex flex-col">
			<div class="flex flex-row justify-end">
				<h2 class="text-white font-bold">{hotelPrice} KMF / nuit</h2>
			</div>
			<div class="flex flex-row justify-between items-center mt-4">
				<div class="">
					<button class="btn btn-primary rounded-md btn-md">Reserver</button>
				</div>
				<div class="">
					<i class="fa fa-star active text-yellow-400" /><span class="text-white text-sm ml-2"
						>{hotelRating}</span
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.hotel {
		border: solid 1px rgba(255, 255, 255, 0.1);
		border-radius: 15px;
		-moz-border-radius: 15px;
		-webkit-border-radius: 15px;
		background: rgba(255, 255, 255, 0.02);
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
	}
	.hotel.mycard {
		border-bottom: none;
		border-left: none;
		border-right: none;
	}

	.hotel:hover img {
		transform: scale(1.03);
	}
	.hotel .hotel_wrap img {
		height: 200px;
		transition: 0.5s;
		-webkit-box-shadow: 3px 3px 5px 0px rgba(20, 20, 20, 0.4);
		-moz-box-shadow: 3px 3px 5px 0px rgba(20, 20, 20, 0.4);
		box-shadow: 3px 3px 5px 0px rgba(20, 20, 20, 0.4);
	}
	.hotel .author {
		margin: 0;
	}
</style>
