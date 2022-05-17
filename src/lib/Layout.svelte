<script>
	import { api } from '../api/Api'
	import userStore from '../stores/user'
	import { onMount } from 'svelte'

	const setLoggedInUser = async () => {
		try {
			const res = await api.getCurrentuser()
			userStore.set(res.data)
		} catch (err) {
			userStore.set(null)
		}
	}

	onMount(async () => {
		setLoggedInUser()
	})
</script>

<div>
	<slot />
</div>

<style>
	/* your styles go here */
</style>
