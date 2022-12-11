<script lang="ts">
	// @ts-nocheck
	import { goto } from '$app/navigation';

	let selectedCategory = 'flight';

	let data = {
		origin: '',
		destination: '',
		departure_date: ''
	};

	let countries = ['Anjouan', 'Grande Comore', 'Moheli', 'Mayotte', 'Tanzanie'];

	const onSearch = (e) => {
		e.preventDefault();
		goto(
			`/discover?filterByOrigin=${data.origin}&filterByDestination=${data.destination}&filterByDepartureDate=${data.departure_date}`
		);
	};
</script>

<div class="min-h-screen background-image px-8 lg:px-16">
	<div
		class="container flex flex-col justify-center lg:justify-between lg:flex-row lg:items-center min-h-screen"
	>
		<div class="leftSide w-full">
			<h1 class="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
				Hey! Bienvenue sur<br />Yvanig Agency
			</h1>
			<p class="mb-5 text-white text-md font-medium">Votre plus beau voyage démarre ici !</p>
			<a class="btn btn-primary rounded-full w-48 text-xs" href="/discover">Découvrir</a>
		</div>
		<div class="rightSide w-full hidden lg:block">
			<div class="card w-full h-fit mt-20 bg-white reservation-card text-neutral">
				<div class="card-body">
					<h2 class="card-title uppercase">Réservez maintenant</h2>
					<div class="flex justify-center mt-4">
						<div class="tabs gap-3">
							<button
								class={`tab tab-bordered border-b-4 ${
									selectedCategory === 'flight' ? 'border-primary text-primary' : ''
								}`}
								on:click={() => (selectedCategory = 'flight')}>Voyage</button
							>
							<!-- <button
								class={`tab tab-bordered border-b-4 ${
									selectedCategory === 'hotel' ? 'border-primary text-primary' : ''
								}`}
								on:click={() => (selectedCategory = 'hotel')}>Hôtel</button
							> -->
						</div>
					</div>

					<div class="card w-full bg-white text-black mt-2">
						<div class="card-body">
							<div class="grid grid-cols-2 gap-4">
								<div class="form-control w-full">
									<label class="label" for="island_start">
										<span class="label-text">Votre lieu de départ:</span>
									</label>
									<select
										id="island_start"
										class="select w-full select-bordered border-black"
										bind:value={data.origin}
									>
										<option disabled selected value="">Choisissez un lieu</option>
										{#each countries as country}
											<option disabled={country === data.destination} value={country}
												>{country}</option
											>
										{/each}
									</select>
								</div>
								<div class="form-control w-full">
									<label class="label" for="island_end">
										<span class="label-text">Votre lieu de destination:</span>
									</label>
									<select
										id="island_end"
										class="select w-full select-bordered border-black"
										bind:value={data.destination}
									>
										<option disabled selected value="">Choisissez un lieu</option>
										{#each countries as country}
											<option disabled={country === data.origin} value={country}>{country}</option>
										{/each}
									</select>
								</div>
							</div>
							<div class="">
								<div class="form-control w-full">
									<label class="label" for="departure_date">
										<span class="label-text">Date de départ souhaitée:</span>
									</label>
									<input
										id="departure_date"
										type="date"
										class="input input-bordered w-full border-black"
										bind:value={data.departure_date}
									/>
								</div>
							</div>
							<div class="justify-end card-actions mt-4">
								<button class="btn btn-primary rounded w-48 text-xs" on:click={onSearch}
									>Rechercher</button
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.background-image {
		background-image: linear-gradient(360deg, var(--color-base-100) 0%, rgba(255, 18, 250, 0) 10%),
			url('/src/assets/bg/bg_hero.webp');
		background-color: var(--color-base-100);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.reservation-card {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
	}
</style>
