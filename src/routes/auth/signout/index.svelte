<script>
	import { api } from '../../../api/Api'

	import { onMount } from 'svelte'
	import userStore from '../../../stores/user'
	import { goto } from '$app/navigation'
	import { notificationCenter } from '../../../config/notification'
	import LoadingToRedirect from '$lib/UI/LoadingToRedirect.svelte'

	const signout = async () => {
		try {
			await api.signout()
			userStore.set(null)
			goto('/')
			notificationCenter.displaySuccessNotification('Vous êtes maintenant déconnecté.')
		} catch (err) {
			notificationCenter.displayErrorNotification(
				'Echec de la déconnexion, veuillez réessayer plus tard.'
			)
		}
	}

	onMount(() => {
		signout()
	})
</script>

<LoadingToRedirect count={10} />

<style>
</style>
