<script lang="ts">
	let selectedCategory = 'trip'

	let hotel_values = {
		island: '',
		arrival_date: '',
		departure_date: '',
		no_adults: 1,
		no_children: 0,
		no_room: 1
	}

	let trip_values = {
		isTwoWay: false,
		start_location: '',
		end_location: '',
		departure_date: '',
		return_date: '',
		no_adults: 1,
		no_children: 0,
		no_baby: 0
	}

	const onSearch = (e) => {
		e.preventDefault()

		if (selectedCategory === 'hotel') {
			console.log(hotel_values)
		} else {
			console.log(trip_values)
		}
	}
</script>

<div class="min-h-screen background-image px-8 lg:px-16">
	<div
		class="container flex flex-col justify-center lg:justify-between lg:flex-row lg:items-center min-h-screen"
	>
		<div class="leftSide w-full">
			<h1 class="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold text-primary-content">
				Hey! Bienvenue sur<br />Yvanig Tour
			</h1>
			<p class="mb-5 text-primary-content text-md">Votre plus beau voyage démarre ici !</p>
			<button class="btn btn-primary rounded-full w-48 text-xs">Découvrir</button>
		</div>
		<div class="rightSide w-full hidden lg:block">
			<div class="card w-full h-full bg-neutral reservation-card text-primary-content">
				<div class="card-body">
					<h2 class="card-title uppercase">Réservez maintenant</h2>
					<div class="flex justify-center mt-4">
						<ul
							class="menu bg-white text-black font-semibold menu-horizontal rounded-box p-2 w-full flex justify-center space-x-4"
						>
							<li
								class="rounded"
								class:bg-neutral={selectedCategory === 'hotel'}
								class:text-white={selectedCategory === 'hotel'}
								on:click={() => (selectedCategory = 'hotel')}
							>
								<a href="/">Hôtel</a>
							</li>
							<li
								class="rounded"
								class:bg-neutral={selectedCategory === 'trip'}
								class:text-white={selectedCategory === 'trip'}
								on:click={() => (selectedCategory = 'trip')}
							>
								<a href="/">Voyage</a>
							</li>
						</ul>
					</div>

					<div class="card w-full bg-white text-black text-primary-conten mt-2">
						<div class="card-body">
							{#if selectedCategory === 'hotel'}
								<form class="space-y-4" on:submit={onSearch}>
									<div class="form-control w-full">
										<label class="label" for="island">
											<span class="label-text">Où allez-vous ?</span>
										</label>
										<select
											id="island"
											class="select w-full select-bordered"
											bind:value={hotel_values.island}
										>
											<option disabled selected value="">Choisissez une île</option>
											<option value="anjouan">Anjouan</option>
											<option value="grandecomore">Grande Comore</option>
											<option value="moheli">Mohéli</option>
											<option value="mayotte">Mayotte</option>
										</select>
									</div>
									<div class="grid grid-cols-2 gap-4">
										<div class="form-control w-full">
											<label class="label" for="arrival">
												<span class="label-text">Date d'arrivée</span>
											</label>
											<input
												id="arrival"
												type="date"
												class="input input-bordered w-full"
												bind:value={hotel_values.arrival_date}
											/>
										</div>
										<div class="form-control w-full">
											<label class="label" for="departure">
												<span class="label-text">Date de départ</span>
											</label>
											<input
												id="departure"
												type="date"
												class="input input-bordered w-full"
												bind:value={hotel_values.departure_date}
											/>
										</div>
									</div>
									<div class="grid grid-cols-3 gap-4">
										<div class="form-control w-full">
											<label class="label" for="no_adults">
												<span class="label-text">Adulte(s)</span>
											</label>
											<input
												id="no_adults"
												type="number"
												min="1"
												class="input input-bordered w-full"
												bind:value={hotel_values.no_adults}
											/>
										</div>
										<div class="form-control w-full">
											<label class="label" for="no_children">
												<span class="label-text">Enfant(s)</span>
											</label>
											<input
												id="no_children"
												type="number"
												min="0"
												class="input input-bordered w-full"
												bind:value={hotel_values.no_children}
											/>
										</div>
										<div class="form-control w-full">
											<label class="label" for="no_room">
												<span class="label-text">Chambre(s)</span>
											</label>
											<input
												id="no_room"
												type="number"
												min="1"
												class="input input-bordered w-full"
												bind:value={hotel_values.no_room}
											/>
										</div>
									</div>
								</form>
							{/if}
							{#if selectedCategory === 'trip'}
								<form class="space-y-4" on:submit={onSearch}>
									<div class="flex flex-row gap-8 justify-center">
										<div class="form-control">
											<label class="cursor-pointer label space-x-4">
												<span class="label-text">Aller simple</span>
												<input
													type="radio"
													name="waytype"
													class="radio checked:bg-primary"
													on:click={() => (trip_values = { ...trip_values, isTwoWay: false })}
													checked={!trip_values.isTwoWay}
												/>
											</label>
										</div>
										<div class="form-control">
											<label class="cursor-pointer label space-x-4">
												<span class="label-text">Aller-retour</span>
												<input
													type="radio"
													name="waytype"
													class="radio checked:bg-primary"
													on:click={() => (trip_values = { ...trip_values, isTwoWay: true })}
													checked={trip_values.isTwoWay}
												/>
											</label>
										</div>
									</div>

									{#if trip_values.isTwoWay}
										<div class="grid grid-cols-2 gap-4">
											<div class="form-control w-full">
												<label class="label" for="island_start">
													<span class="label-text">Votre île de départ</span>
												</label>
												<select
													id="island_start"
													class="select w-full select-bordered"
													bind:value={trip_values.start_location}
												>
													<option disabled selected value="">Choisissez une île</option>
													<option value="anjouan">Anjouan</option>
													<option value="grandecomore">Grande Comore</option>
													<option value="moheli">Mohéli</option>
													<option value="mayotte">Mayotte</option>
												</select>
											</div>
											<div class="form-control w-full">
												<label class="label" for="island_end">
													<span class="label-text">Votre île de destination</span>
												</label>
												<select
													id="island_end"
													class="select w-full select-bordered"
													bind:value={trip_values.end_location}
												>
													<option disabled selected value="">Choisissez une île</option>
													<option value="anjouan">Anjouan</option>
													<option value="grandecomore">Grande Comore</option>
													<option value="moheli">Mohéli</option>
													<option value="mayotte">Mayotte</option>
												</select>
											</div>
										</div>
										<div class="grid grid-cols-2 gap-4">
											<div class="form-control w-full">
												<label class="label" for="departure_date">
													<span class="label-text">Aller le</span>
												</label>
												<input
													id="departure_date"
													type="date"
													class="input input-bordered w-full"
													bind:value={trip_values.departure_date}
												/>
											</div>
											<div class="form-control w-full">
												<label class="label" for="return_date">
													<span class="label-text">Retour le</span>
												</label>
												<input
													id="return_date"
													type="date"
													class="input input-bordered w-full"
													bind:value={trip_values.return_date}
												/>
											</div>
										</div>
										<div class="grid grid-cols-3 gap-4">
											<div class="form-control w-full">
												<label class="label" for="no_adults">
													<span class="label-text">Adulte(s)</span>
												</label>
												<input
													id="no_adults"
													type="number"
													min="1"
													class="input input-bordered w-full"
													bind:value={trip_values.no_adults}
												/>
											</div>
											<div class="form-control w-full">
												<label class="label" for="no_children">
													<span class="label-text">Enfant(s)</span>
												</label>
												<input
													id="no_children"
													type="number"
													min="0"
													class="input input-bordered w-full"
													bind:value={trip_values.no_children}
												/>
											</div>
											<div class="form-control w-full">
												<label class="label" for="no_baby">
													<span class="label-text">Bébé(s)</span>
												</label>
												<input
													id="no_baby"
													type="number"
													min="0"
													class="input input-bordered w-full"
													bind:value={trip_values.no_baby}
												/>
											</div>
										</div>
									{:else}
										<div class="grid grid-cols-2 gap-4">
											<div class="form-control w-full">
												<label class="label" for="island_start">
													<span class="label-text">Votre île de départ</span>
												</label>
												<select
													id="island_start"
													class="select w-full select-bordered"
													bind:value={trip_values.start_location}
												>
													<option disabled selected value="">Choisissez une île</option>
													<option value="anjouan">Anjouan</option>
													<option value="grandecomore">Grande Comore</option>
													<option value="moheli">Mohéli</option>
													<option value="mayotte">Mayotte</option>
												</select>
											</div>
											<div class="form-control w-full">
												<label class="label" for="island_end">
													<span class="label-text">Votre île de destination</span>
												</label>
												<select
													id="island_end"
													class="select w-full select-bordered"
													bind:value={trip_values.end_location}
												>
													<option disabled selected value="">Choisissez une île</option>
													<option value="anjouan">Anjouan</option>
													<option value="grandecomore">Grande Comore</option>
													<option value="moheli">Mohéli</option>
													<option value="mayotte">Mayotte</option>
												</select>
											</div>
										</div>
										<div class="">
											<div class="form-control w-full">
												<label class="label" for="departure_date">
													<span class="label-text">Aller le</span>
												</label>
												<input
													id="departure_date"
													type="date"
													class="input input-bordered w-full"
													bind:value={trip_values.departure_date}
												/>
											</div>
										</div>
										<div class="grid grid-cols-3 gap-4">
											<div class="form-control w-full">
												<label class="label" for="no_adults">
													<span class="label-text">Adulte(s)</span>
												</label>
												<input
													id="no_adults"
													type="number"
													min="1"
													class="input input-bordered w-full"
													bind:value={trip_values.no_adults}
												/>
											</div>
											<div class="form-control w-full">
												<label class="label" for="no_children">
													<span class="label-text">Enfant(s)</span>
												</label>
												<input
													id="no_children"
													type="number"
													min="0"
													class="input input-bordered w-full"
													bind:value={trip_values.no_children}
												/>
											</div>
											<div class="form-control w-full">
												<label class="label" for="no_baby">
													<span class="label-text">Bébé(s)</span>
												</label>
												<input
													id="no_baby"
													type="number"
													min="0"
													class="input input-bordered w-full"
													bind:value={trip_values.no_baby}
												/>
											</div>
										</div>
									{/if}
								</form>
							{/if}
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
		background-image: linear-gradient(360deg, #008080 0%, rgba(255, 18, 250, 0) 10%),
			url('/src/assets/bg/bg_hero.png');
		background-color: #008080;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.reservation-card {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
	}
</style>
