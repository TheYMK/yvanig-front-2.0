<script lang="ts">
	import Navbar from '$lib/Navbar/index.svelte'
	import Footer from '$lib/Footer/index.svelte'
	import Input from '$lib/UI/Input.svelte'
	import { notificationCenter } from '../../../config/notification'
	import { api } from '../../../api/Api'
	import { isEmailValid } from '../../../config/helpers'
	import { goto } from '$app/navigation'

	let data = {
		email: '',
		password: ''
	}

	let error = ''
	let loading = false

	const onEmailChange = (e: any) => {
		data.email = e.target.value
		if (!isEmailValid(data.email)) {
			error = 'Veuillez renseigner un email valide.'
		} else {
			error = ''
		}
	}

	const onPasswordChange = (e: any) => {
		data.password = e.target.value
	}

	const onSubmit = async (e: any) => {
		loading = true
		e.preventDefault()

		if (!data.email || !data.password) {
			notificationCenter.displayErrorNotification('Veuillez renseigner tous les champs.')
			loading = false
			return
		}

		if (!isEmailValid(data.email)) {
			notificationCenter.displayErrorNotification('Veuillez renseigner un email valide.')
			loading = false
			return
		}

		if (data.password.length < 6) {
			notificationCenter.displayErrorNotification(
				'Votre mot de passe doit contenir au moins 8 caractères.'
			)
			loading = false
			return
		}

		try {
			await api.signin(data)
			notificationCenter.displaySuccessNotification('Vous êtes maintenant connecté.')
			loading = false
			goto('/')
		} catch (err) {
			loading = false
			if (err.response?.data?.statusCode === 404) {
				notificationCenter.displayErrorNotification(
					"Aucun compte n'est associé à cette adresse email."
				)
			} else if (err.response?.data?.statusCode === 401) {
				notificationCenter.displayErrorNotification('Email ou mot de passe incorrect.')
			} else {
				notificationCenter.displayErrorNotification('Une erreur est survenue.')
			}
		}
	}
</script>

<Navbar />
<div class="bg-neutral h-screen lg:px-16">
	<div class="flex justify-center items-center h-full">
		<div class="auth-card bg-white w-[400px] h-97 md:rounded-[15px] p-8">
			<div id="title" class="text-center">
				<h1 class="font-bold text-secondary">Se Connecter</h1>
			</div>
			<div id="form" class="mt-10">
				<form class="space-y-4">
					<Input
						label="Adresse email"
						isRequired
						inputId="email"
						type="email"
						placeholder="johndoe@xxxx.xxx"
						value={data.email}
						on:input={onEmailChange}
					/>
					<Input
						label="Mot de passe"
						isRequired
						inputId="password"
						type="password"
						placeholder="•••••••••"
						value={data.password}
						on:input={onPasswordChange}
					/>
					<div>
						<a
							href="/auth/password/forgot"
							class="text-secondary font-bold text-xs hover:text-primary">Mot de passe oublié ?</a
						>
					</div>

					<div class="text-center">
						<button
							disabled={data.email === '' || data.password === ''}
							on:click={onSubmit}
							class="btn btn-primary rounded-full w-48 text-xs mt-4"
						>
							{#if loading}
								<div class="animate-spin">
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
								<span>Se connecter</span>
							{/if}
						</button>
						{#if error}
							<div>
								<p class="text-red-600 text-xs mt-4">{error}</p>
							</div>
						{/if}
					</div>

					<div class="text-center">
						<a
							href="/auth/register"
							class="text-secondary text-xs hover:text-primary hover:font-bold underline"
							>Vous n'avez pas de compte ? Enregistrez-vous</a
						>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<div class="mt-20">
	<Footer />
</div>

<style>
	.auth-card {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
	}
</style>
