<script lang="ts">
		// @ts-nocheck
	import { Currencies, Languages, Themes } from '../../../config/constants'
	import { onMount } from 'svelte'
	import { getSettingsStoreValues } from '../../../stores'
	import settingsStore from '../../../stores/settingsStore'
	import { notificationCenter } from '../../../config/notification'

	let disableSave = true
	let loading = false

	let data = {
		default_language: '',
		default_currency: '',
		default_theme: '',
		default_timezone: ''
	}

	const onOptionChange = (e: any, key: string) => {
		if (data[key] !== e.target.value) {
			disableSave = false
		}

		data[key] = e.target.value
	}

	const onUpdateDefaultSettings = async () => {
		if (disableSave) {
			return
		}

		try {
			loading = true
			await settingsStore.updateSettings(data)
			notificationCenter.displaySuccessNotification('Vos informations ont été mises à jour.')

			setTimeout(() => {
				window.location.reload()
			}, 1000)
		} catch (err) {
			notificationCenter.displayErrorNotification(
				'Une erreur est survenue lors de la mise à jour des informations utilisateur.'
			)
		} finally {
			loading = false
		}
	}

	onMount(() => {
		data = JSON.parse(localStorage.getItem('yg_settings')) || getSettingsStoreValues()
	})
</script>

<div class="mt-10 grid grid-cols-3 gap-8">
	<div class="cols-span-3 lg:col-span-1">
		<div class="form-control">
			<label class="label" for="currency">
				<span class="label-text text-neutral font-medium">Devise</span>
			</label>
			<select
				id="currency"
				class="select select-bordered border-neutral w-full"
				value={data.default_currency}
				on:change={(e) => onOptionChange(e, 'default_currency')}
			>
				<option disabled selected>Choisir une devise</option>
				{#each Currencies as currency}
					<option value={currency.symbol}>{currency.name} ({currency.symbol})</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="cols-span-3 lg:col-span-1">
		<div class="form-control">
			<label class="label" for="language">
				<span class="label-text text-neutral font-medium">Langue</span>
			</label>
			<select
				id="language"
				class="select select-bordered border-neutral w-full"
				value={data.default_language}
				on:change={(e) => onOptionChange(e, 'default_language')}
			>
				<option disabled selected>Choisir une langue</option>
				{#each Languages as language}
					<option value={language.symbol}>{language.name} ({language.symbol})</option>
				{/each}
			</select>
		</div>
	</div>
	<div class="cols-span-3 lg:col-span-1">
		<div class="form-control">
			<label class="label" for="theme">
				<span class="label-text text-neutral font-medium">Thème</span>
			</label>
			<select
				id="theme"
				class="select select-bordered border-neutral w-full"
				value={data.default_theme}
				on:change={(e) => onOptionChange(e, 'default_theme')}
			>
				<option disabled selected>Choisir un thème</option>
				<option value="light">Clair</option>
				<option value="dark">Sombre</option>
			</select>
		</div>
	</div>
	<div class="col-span-3">
		<button
			class="btn text-xs btn-primary rounded-md mt-4"
			disabled={disableSave}
			on:click={onUpdateDefaultSettings}
		>
			{#if loading}
				<div class="spin">
					<svg
						role="status"
						class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-primary"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				</div>
			{:else}
				<span>Sauvergarder</span>
			{/if}
		</button>
	</div>
</div>

<style>
</style>
