<script>
	import '../app.css';
	import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';
	import en from '../locales/en.json';

	addMessages('en', en);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
</script>

<main>
	<slot />
</main>
