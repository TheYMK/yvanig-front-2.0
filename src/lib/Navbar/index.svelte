<script lang="ts">
	export let sticky = false
	let isMobileMenuOpen = false
	let y: any

	function onMobileMenuOpen() {
		isMobileMenuOpen = true
		window.scrollTo(0, 0)
	}

	function onMobileMenuClose() {
		isMobileMenuOpen = false
	}
</script>

<svelte:window bind:scrollY={y} />

<nav
	id="navbar"
	class={y >= 50
		? `flex flex-col justify-center bg-neutral text-neutral-content w-full z-50 top-0 px-8 lg:px-16 shadow-lg`
		: `flex flex-col justify-center text-neutral-content w-full z-50 top-0 px-8 lg:px-16`}
	class:sticky
	class:fixed={!sticky}
>
	<div class="container flex flex-row justify-between items-center">
		<div
			id="left-side"
			class="flex flex-row items-center tooltip tooltip-bottom"
			data-tip="Accueil"
			on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
		>
			<a href="/" class="mr-8">
				<h1 class="text-white font-bold">YVANIG LOGO</h1>
			</a>
		</div>
		<div id="right-side" class="flex flex-row items-center">
			<div class="block lg:hidden">
				<button
					on:click={() => onMobileMenuOpen()}
					class="flex items-center color-accent py-4 ml-4"
				>
					<svg
						class="h-8 w-8 hover:text-primary"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			<div
				class:hidden={!isMobileMenuOpen}
				class="bg-neutral hidden absolute w-full h-screen left-0 top-0 flex-grow lg:flex lg:items-center lg:static lg:bg-transparent lg:w-auto lg:h-auto lg:visible"
			>
				<div
					class="container font-medium text-30 text-white text-center flex flex-col lg:flex-grow lg:mx-auto lg:flex-row lg:justify-end "
				>
					<button
						on:click={() => onMobileMenuClose()}
						class:hidden={!isMobileMenuOpen}
						class="lg:hidden w-fit-content py-10 px-6 self-end"
					>
						<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
					<div class="flex flex-col items-center lg:flex-row">
						<a
							href="/"
							class="hover:text-primary text-2xl mb-5 lg:mb-0 lg:text-sm font-bold mr-5 ml-5"
						>
							Accueil
						</a>
						<a
							href="/"
							class="hover:text-primary text-2xl mb-5 lg:mb-0 lg:text-sm font-bold mr-5 ml-5"
						>
							Découvrir
						</a>
						<a
							href="/"
							class="hover:text-primary text-2xl mb-5 lg:mb-0 lg:text-sm font-bold mr-5 ml-5"
						>
							Réservation
						</a>
						<a
							href="/"
							class="hover:text-primary text-2xl mb-5 lg:mb-0 lg:text-sm font-bold mr-5 ml-5"
						>
							Contactez-nous
						</a>
						<div class="lg:ml-5">
							<a href="/auth/login" class="btn rounded-full btn-sm text-xs btn-primary w-40"
								>Se Connecter</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
	#navbar {
		height: 90px;
	}
</style>
