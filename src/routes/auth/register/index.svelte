<script lang="ts">
	import Navbar from '$lib/Navbar/index.svelte'
	import Footer from '$lib/Footer/index.svelte'
	import Input from '$lib/UI/Input.svelte'

	let auth_values = {
		email: ''
	}

	const onEmailChange = (e: any) => {
		auth_values.email = e.target.value
	}
</script>

<Navbar />
<div class="bg-neutral h-screen px-8 lg:px-16">
	<div class="flex justify-center items-center h-full">
		<div class="auth-card bg-neutral w-[400px] h-[350px] rounded-md p-8">
			<div id="title" class="text-center">
				<h1 class="font-bold text-white">S'enregistrer</h1>
			</div>
			<div id="form" class="mt-10">
				<form class="space-y-4">
					<Input
						label="Adresse email"
						isRequired
						inputId="email"
						type="email"
						placeholder="johndoe@xxxx.xxx"
						value={auth_values.email}
						on:input={onEmailChange}
					/>

					<div class="text-center">
						<button class="btn btn-primary rounded-full w-48 text-xs mt-4">S'enregistrer</button>
					</div>

					<div class="text-center">
						<a
							href="/auth/login"
							class="text-white text-xs hover:text-primary hover:font-bold underline"
							>Vous avez déjà un compte ? Connectez-vous</a
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
		border-radius: 15px;
	}
	.auth-input {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
		border-radius: 15px;
	}
</style>
