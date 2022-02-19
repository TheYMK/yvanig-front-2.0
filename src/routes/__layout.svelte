<script lang="ts">
	import '../app.css'
	import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n'
	import fr from '../locales/fr.json'

	addMessages('fr', fr)

	init({
		fallbackLocale: 'fr',
		initialLocale: getLocaleFromNavigator()
	})
</script>

<main>
	<slot />
</main>
