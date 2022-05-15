<script lang="ts">
	import Input from '$lib/UI/Input.svelte'
	import { api } from '../../../api/Api'
	import { onMount } from 'svelte'
	import { notificationCenter } from '../../../config/notification'
	import { isEmailValid } from '../../../config/helpers'

	let data = {
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	}

	let disableSave = true

	let errors = {
		email: ''
	}

	let loading = false

	const onInputChange = (e: any, id: string) => {
		if (data[id] !== e.target.value) {
			disableSave = false
		}

		data[id] = e.target.value
		if (id === 'email') {
			if (!isEmailValid(data.email)) {
				errors = { ...errors, email: 'Veuillez renseigner un email valide.' }
			} else {
				errors = { ...errors, email: '' }
			}
		}
	}

	const onSendPasswordResetLink = async () => {
		if (data.email) {
			try {
				loading = true
				await api.sendPasswordResetEmail(data.email)

				notificationCenter.displaySuccessNotification(
					'Un email vous a été envoyé pour réinitialiser votre mot de passe.'
				)
			} catch (err) {
				notificationCenter.displayErrorNotification(
					"Une erreur est survenue lors de l'envoi de l'email."
				)
			} finally {
				loading = false
			}
		}
	}

	const loadUserInfo = async () => {
		try {
			loading = true
			const response = await api.getCurrentuser()

			if (response.status === 200) {
				data = {
					first_name: response.data.first_name,
					last_name: response.data.last_name,
					email: response.data.email,
					password: ''
				}
			}
		} catch (err) {
			notificationCenter.displayErrorNotification(
				'Une erreur est survenue lors du chargement des informations utilisateur.'
			)
		} finally {
			loading = false
		}
	}

	const onUpdateUserInfo = async () => {
		if (disableSave || errors.email.length > 0) {
			return
		}

		try {
			loading = true
			await api.updateUserInfo(data)
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
		loadUserInfo()
	})
</script>

<div class="mt-10 grid grid-cols-3 gap-8">
	<div class="cols-span-3 lg:col-span-1">
		<Input
			label="Nom de famille"
			isRequired
			inputId="last_name"
			type="text"
			placeholder=""
			value={data.last_name}
			on:input={(e) => {
				// @ts-ignore
				onInputChange(e, 'last_name')
			}}
		/>
	</div>
	<div class="cols-span-3 lg:col-span-1">
		<Input
			label="Prénom"
			isRequired
			inputId="first_name"
			type="text"
			placeholder=""
			value={data.first_name}
			on:input={(e) => {
				// @ts-ignore
				onInputChange(e, 'first_name')
			}}
		/>
	</div>
	<div class="cols-span-3 lg:col-span-1">
		<Input
			label="Email"
			isRequired
			inputId="email"
			type="email"
			placeholder=""
			value={data.email}
			on:input={(e) => {
				// @ts-ignore
				onInputChange(e, 'email')
			}}
		/>
	</div>
	<div class="col-span-3">
		{#if errors.email}
			<div>
				<p class="text-red-600 text-xs mt-4">{errors.email}</p>
			</div>
		{/if}
		<div class="flex flex-row flex-wrap gap-4">
			<button
				class="btn text-xs btn-primary rounded-md mt-4"
				on:click={onUpdateUserInfo}
				disabled={disableSave || errors.email.length > 0}
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
			<button
				class="btn text-xs btn-info text-white rounded-md mt-4"
				disabled={!data.email}
				on:click={onSendPasswordResetLink}
			>
				{#if loading}
					<div class="spin">
						<svg
							role="status"
							class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-white fill-info"
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
					<span>Reinitialiser votre mot de passe</span>
				{/if}
			</button>
		</div>
	</div>
</div>

<style>
	/* your styles go here */
</style>
