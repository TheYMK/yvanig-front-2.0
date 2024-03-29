<script lang="ts">
	// @ts-nocheck
	import Navbar from '$lib/Navbar/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import Input from '$lib/UI/Input.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import jwt_decode from 'jwt-decode';
	import { notificationCenter } from '../../../../config/notification';
	import { api } from '../../../../api/Api';
	import { goto } from '$app/navigation';
	import Layout from '$lib/Layout.svelte';

	let data = {
		first_name: '',
		last_name: '',
		password: '',
		token: ''
	};
	let email = '';
	let repeat_password = '';

	let errors = {
		password: '',
		passwordMatch: ''
	};
	let loading = false;

	$: if (data.password !== repeat_password) {
		errors = {
			...errors,
			passwordMatch: 'Les mots de passe ne correspondent pas.'
		};
	} else {
		errors = {
			...errors,
			passwordMatch: ''
		};
	}

	const onPasswordChange = (e: any) => {
		data.password = e.target.value;
		if (data.password.length < 6) {
			errors = {
				...errors,
				password: "Veuillez renseigner un mot de passe d'au moins 6 caractères."
			};
		} else {
			errors = {
				...errors,
				password: ''
			};
		}
	};

	const onSubmit = async (e: any) => {
		loading = true;
		e.preventDefault();

		if (
			!data.first_name ||
			!data.last_name ||
			!data.password ||
			!data.token ||
			errors.password ||
			errors.passwordMatch
		) {
			notificationCenter.displayErrorNotification('Veuillez renseigner tous les champs.');
			loading = false;
			return;
		}

		try {
			await api.register(data);
			notificationCenter.displaySuccessNotification('Votre compte a bien été créé.');
			goto('/');
		} catch (err) {
			if (err.response?.data?.statusCode === 400) {
				notificationCenter.displayErrorNotification(
					"Nous n'avons pas pu créer votre compte. Veuillez réessayer plus tard."
				);
			} else {
				notificationCenter.displayErrorNotification('Une erreur est survenue.');
			}
		} finally {
			loading = false;
		}
	};
	onMount(() => {
		data.token = $page.url.searchParams.get('token');
		// @ts-ignore
		email = jwt_decode(data.token).email;
	});
</script>

<svelte:head>
	<title>Yvanig Agency</title>
</svelte:head>

<Layout>
	<Navbar />
	<div class="h-screen lg:px-16">
		<div class="flex justify-center items-center h-full">
			<div class="auth-card bg-white w-[500px] h-fit md:rounded-[15px] p-8 mt-52 lg:mt-0">
				<div id="title" class="text-center">
					<h1 class="font-bold text-neutral">Créez votre compte</h1>
				</div>
				<div id="form" class="mt-10">
					<form class="grid grid-cols-2 gap-8">
						<div class="col-span-2">
							<Input
								label="Adresse email"
								isRequired
								disabled
								inputId="email"
								type="email"
								value={email}
								on:input={(e) => {
									// @ts-ignore
									data.last_name = e.target.value;
								}}
							/>
						</div>
						<div class="col-span-2 lg:col-span-1">
							<Input
								label="Nom de famille"
								isRequired
								inputId="last_name"
								type="text"
								placeholder="Doe"
								value={data.last_name}
								on:input={(e) => {
									// @ts-ignore
									data.last_name = e.target.value;
								}}
							/>
						</div>
						<div class="col-span-2 lg:col-span-1">
							<Input
								label="Prénom"
								isRequired
								inputId="first_name"
								type="text"
								placeholder="John"
								value={data.first_name}
								on:input={(e) => {
									// @ts-ignore
									data.first_name = e.target.value;
								}}
							/>
						</div>
						<div class="col-span-2 lg:col-span-1">
							<Input
								label="Mot de passe"
								isRequired
								inputId="password"
								type="password"
								placeholder="•••••••••"
								value={data.password}
								on:input={onPasswordChange}
							/>
						</div>
						<div class="col-span-2 lg:col-span-1">
							<Input
								label="Confirmer le mot de passe"
								isRequired
								inputId="repeat_password"
								type="password"
								placeholder="•••••••••"
								value={repeat_password}
								on:input={(e) => {
									// @ts-ignore
									repeat_password = e.target.value;
								}}
							/>
						</div>

						<div class="text-center col-span-2">
							<button
								disabled={data.first_name === '' ||
									data.last_name === '' ||
									data.password === '' ||
									data.password !== repeat_password}
								on:click={onSubmit}
								class="btn btn-primary rounded-full w-48 text-xs mt-4"
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
									<span>Créer mon compte</span>
								{/if}
							</button>
							{#if errors.password || errors.passwordMatch}
								<div class="col-span-2 mt-4">
									<p class="text-red-600 text-xs">{errors.password}</p>
									<p class="text-red-600 text-xs">{errors.passwordMatch}</p>
								</div>
							{/if}
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-36 lg:mt-20">
		<Footer />
	</div>
</Layout>

<style>
	.auth-card {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
	}
</style>
