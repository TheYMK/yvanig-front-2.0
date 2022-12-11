<script lang="ts">
	import Navbar from '../../lib/Navbar/index.svelte'
	import Layout from '../../lib/Layout.svelte'
	import Footer from '../../lib/Footer/index.svelte'
	import Input from '../../lib/UI/Input.svelte'
	import { isEmailValid } from '../../config/helpers'
	import { notificationCenter } from '../../config/notification'
	import { api } from '../../api/Api'

	let data = {
		name: '',
		email: '',
		subject: '',
		message: ''
	}

	let errors = {
		email: '',
		name: '',
		subject: '',
		message: ''
	}

	let loading = false

	const onEmailChange = (e: any) => {
		data.email = e.target.value
		if (!isEmailValid(data.email)) {
			errors = { ...errors, email: 'Veuillez renseigner un email valide.' }
		} else {
			errors = { ...errors, email: '' }
		}
	}

	const onSubmit = async (e: any) => {
		loading = true
		e.preventDefault()

		if (!data.email || !data.name || data.message.length < 50 || !data.subject) {
			notificationCenter.displayErrorNotification('Veuillez renseigner tous les champs.')
			loading = false
			return
		}

		if (!isEmailValid(data.email)) {
			notificationCenter.displayErrorNotification('Veuillez renseigner un email valide.')
			loading = false
			return
		}

		if (data.message.length > 400) {
			notificationCenter.displayErrorNotification(
				'Votre message doit avoir moins de 400 caractères'
			)
			loading = false
			return
		}
		try {
			await api.sendMessage(data)
			notificationCenter.displaySuccessNotification('Vous message a bien été envoyé.')
			data = {
				name: '',
				email: '',
				subject: '',
				message: ''
			}
			errors = {
				email: '',
				name: '',
				subject: '',
				message: ''
			}
		} catch (err) {
			notificationCenter.displayErrorNotification(
				"Une erreur est survenue lors de l'envoi de votre message."
			)
		} finally {
			loading = false
		}
	}
</script>

<Layout>
	<Navbar sticky />
	<div class="h-screen lg:px-16">
		<div class="flex justify-center items-center h-full">
			<div class="contact-card bg-white w-[600px] h-fit md:rounded-[15px] p-8">
				<div id="title" class="text-center">
					<h1 class="font-bold text-neutral">Avez-vous des questions ? Contactez-nous</h1>
				</div>
				<div id="form" class="mt-10">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<div class="col-span-2 lg:col-span-1">
							<Input
								label="Votre nom et prénom"
								isRequired
								inputId="name"
								type="text"
								placeholder="John Doe"
								value={data.name}
								on:input={(e) => {
									// @ts-ignore
									data = { ...data, name: e.target.value }
								}}
							/>
						</div>
						<div class="col-span-2 lg:col-span-1">
							<Input
								label="Adresse email"
								isRequired
								inputId="email"
								type="email"
								placeholder="johndoe@xxxx.xxx"
								value={data.email}
								on:input={onEmailChange}
							/>
						</div>
						<div class="col-span-2 lg:col-span-2">
							<Input
								label="Objet du message"
								isRequired
								inputId="subject"
								type="text"
								placeholder="Je souhaite avoir plus d'information sur votre service de location de voiture"
								value={data.subject}
								on:input={(e) => {
									// @ts-ignore
									data = { ...data, subject: e.target.value }
								}}
							/>
						</div>
						<div class="col-span-2 lg:col-span-2">
							<label class="label" for="message">
								<span class="label-text text-neutral font-medium"
									>Votre message
									<span class="text-red-500 ml-1">*</span>
								</span>
							</label>
							<textarea
								name="message"
								id="message"
								class="input h-24 input-bordered w-full border-black"
								placeholder="J'ai un problème avec...."
								value={data.message}
								on:input={(e) => {
									// @ts-ignore
									data = { ...data, message: e.target.value }
								}}
							/>
						</div>
						<div class="text-center col-span-1 lg:col-span-2">
							<button
								disabled={data.email === '' ||
									data.name === '' ||
									data.subject === '' ||
									data.message.length < 50 ||
									errors.email.length > 0 ||
									data.message.length > 400}
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
									<span>Envoyer un message</span>
								{/if}
							</button>
							{#if errors.email}
								<div>
									<p class="text-red-600 text-xs mt-4">{errors.email}</p>
								</div>
							{/if}
							{#if data.message === '' || data.name === '' || data.subject === ''}
								<div>
									<p class="text-red-600 text-xs mt-4">Tous les champs sont requis</p>
								</div>
							{/if}
							{#if data.message.length > 400 || data.message.length < 50}
								<div>
									<p class="text-red-600 text-xs mt-4">
										Votre message doit avoir plus de 50 caractères et moins de 400 caractères
									</p>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="">
		<Footer />
	</div>
</Layout>

<style>
	.contact-card {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
	}
</style>
