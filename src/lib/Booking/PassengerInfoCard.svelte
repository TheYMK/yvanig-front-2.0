<script lang="ts">
		// @ts-nocheck
	import { api } from '../../api/Api'
	import { onMount } from 'svelte'
	import { createEventDispatcher } from 'svelte'
	import userStore from '../../stores/user'
	import { notificationCenter } from '../../config/notification'
	import Input from '../UI/Input.svelte'
	import { DocumentTypes, Genders } from '../../config/constants'

	export let flight = null

	const dispatch = createEventDispatcher()

	let passengerValues = {
		document_type: '',
		document_number: '',
		phone_number: '',
		date_of_birth: '',
		gender: ''
	}

	const loadPassenger = async () => {
		if ($userStore) {
			try {
				let response = await api.getPassenger()
				if (response.data.length > 0) {
					passengerValues = {
						document_type: response.data[0].document_type,
						document_number: response.data[0].document_number,
						phone_number: response.data[0].phone_number,
						date_of_birth: response.data[0].date_of_birth,
						gender: response.data[0].gender
					}
				}
			} catch (err) {
				if (err.response?.data?.statusCode !== 404) {
					notificationCenter.displayErrorNotification(
						'Une erreur est survenue lors de la récupération des informations de votre compte.'
					)
				}
			}
		}
	}

	onMount(() => {
		loadPassenger()
	})
</script>

<div class="px-8 mt-10">
	{#if !$userStore}
		<div class="flex flex-col justify-center items-center space-y-2 mt-10">
			<h2>Veuillez d'abord vous connecter pour continuer.</h2>
			<a href={`/auth/login?from=/bookflight/${flight.id}`} class="btn btn-primary">Se connecter</a>
		</div>
	{:else}
		<form class="grid grid-cols-4 gap-8">
			<div class="col-span-4 lg:col-span-4">
				<div class="form-control">
					<label class="label" for="gender">
						<span class="label-text text-neutral font-medium"
							>Civilité
							<span class="text-red-500 ml-1">*</span>
						</span>
					</label>
					<select
						id="gender"
						class="input input-bordered border-neutral w-full"
						value={passengerValues.gender}
						on:change={(e) => {
							// @ts-ignore
							passengerValues = { ...passengerValues, gender: e.target.value }
						}}
					>
						<option disabled value="">Veuillez selectionner un titre de civilité</option>
						<option value={Genders.MALE}>Mr</option>
						<option value={Genders.FEMALE}>Mme</option>
					</select>
				</div>
			</div>
			<div class="col-span-4 lg:col-span-2">
				<Input
					label="Nom de famille"
					isRequired
					inputId="last_name"
					type="text"
					disabled
					value={$userStore.last_name}
				/>
			</div>
			<div class="col-span-4 lg:col-span-2">
				<Input
					label="Prénom"
					isRequired
					inputId="first_name"
					type="text"
					disabled
					value={$userStore.first_name}
				/>
			</div>
			<div class="col-span-4 lg:col-span-2">
				<div class="form-control">
					<label class="label" for="status">
						<span class="label-text text-neutral font-medium"
							>Type de document
							<span class="text-red-500 ml-1">*</span>
						</span>
					</label>
					<select
						id="status"
						class="input input-bordered border-neutral w-full"
						value={passengerValues.document_type}
						on:change={(e) => {
							// @ts-ignore
							passengerValues = { ...passengerValues, document_type: e.target.value }
						}}
					>
						<option disabled value="">Veuillez selectionner un type de document</option>
						<option value={DocumentTypes.PASSPORT}>Passeport</option>
						<option value={DocumentTypes.ID_CARD}>Carte nationale</option>
					</select>
				</div>
			</div>
			<div class="col-span-4 lg:col-span-2">
				<Input
					label="Numéro du document"
					isRequired
					inputId="document_number"
					type="text"
					value={passengerValues.document_number}
					on:input={(e) => {
						// @ts-ignore
						passengerValues = { ...passengerValues, document_number: e.target.value }
					}}
				/>
			</div>
			<div class="col-span-4 lg:col-span-2">
				<Input
					label="Numéro de téléphone"
					isRequired
					inputId="phone_number"
					type="tel"
					value={passengerValues.phone_number}
					on:input={(e) => {
						// @ts-ignore
						passengerValues = { ...passengerValues, phone_number: e.target.value }
					}}
				/>
			</div>
			<div class="col-span-4 lg:col-span-2">
				<Input
					label="Date de naissance"
					isRequired
					inputId="date_of_birth"
					type="date"
					value={passengerValues.date_of_birth}
					on:input={(e) => {
						// @ts-ignore
						passengerValues = { ...passengerValues, date_of_birth: e.target.value }
					}}
				/>
			</div>
			<div class="col-span-4 flex flex-row space-x-2 justify-center">
				<div class="btn-group grid grid-cols-2">
					<button
						class="btn btn-neutral"
						on:click={(e) => {
							e.preventDefault()
							dispatch('previous')
						}}><i class="fa-solid fa-angle-left mr-2" /> Précédent</button
					>
					<button
						class="btn btn-primary"
						disabled={!passengerValues.document_type ||
							!passengerValues.document_number ||
							!passengerValues.gender ||
							!passengerValues.date_of_birth}
						on:click={(e) => {
							e.preventDefault()
							dispatch('nextStep', passengerValues)
						}}>Sièges <i class="fa-solid fa-angle-right ml-2" /></button
					>
				</div>
			</div>
		</form>
	{/if}
</div>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
