<script>
		// @ts-nocheck
	import LoadingToRedirect from '../UI/LoadingToRedirect.svelte'
	import userStore from '../../stores/user'

	let accessGranted = false

	$: if ($userStore && $userStore.role === 'customer') {
		accessGranted = true
	}
</script>

<div>
	{#if accessGranted}
		<slot />
	{:else}
		<LoadingToRedirect count={10} />
	{/if}
</div>

<!-- markup (zero or more items) goes here -->
<style>
</style>
