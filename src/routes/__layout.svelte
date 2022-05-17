<script lang="ts">
	import '../app.css'
	import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n'
	import fr from '../locale/fr.json'
	import { SvelteToast } from '@zerodevx/svelte-toast'
	import { onMount } from 'svelte'
	import { initBaseStores } from '../stores/initStore'
	import { setCurrentTheme } from '../config/helpers'

	addMessages('fr', fr)

	init({
		fallbackLocale: 'fr',
		initialLocale: getLocaleFromNavigator()
	})

	const options = {
		duration: 10000,
		pausable: true
	}

	onMount(async () => {
		try {
			await Promise.all([initBaseStores()])
			setCurrentTheme()
		} catch (err) {
			console.log('[ERROR INIT]', err)
		}
	})
</script>

<main>
	<div class="wrap">
		<SvelteToast {options} />
	</div>
	<slot />
</main>

<style>
	.wrap {
		--toastContainerTop: 0.5rem;
		--toastContainerRight: 0.5rem;
		--toastContainerBottom: auto;
		--toastContainerLeft: 0.5rem;
		--toastWidth: 100%;
		--toastMinHeight: 2rem;
		--toastPadding: 0 0.5rem;
		font-size: 0.875rem;
	}
	@media (min-width: 40rem) {
		.wrap {
			--toastContainerRight: auto;
			--toastContainerLeft: calc(50vw - 20rem);
			--toastWidth: 40rem;
		}
	}
</style>
