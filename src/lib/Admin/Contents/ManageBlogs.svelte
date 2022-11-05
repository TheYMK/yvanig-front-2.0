<script>
	// your script goes here
	import GenericHero from '$lib/UI/GenericHero.svelte'

	import AddBlogPostModal from '../Modals/AddBlogPostModal.svelte'

	let isAddBlogPostModalOpened = false
</script>

<div class="text-neutral">
	<GenericHero
		title="Gestion des blogs"
		titleClassName="text-xl lg:text-4xl"
		separatorClassName="w-48"
		containerClassName="h-[200px]"
	>
		<div slot="action" class="mt-10">
			<button class="btn btn-primary" on:click={() => (isAddBlogPostModalOpened = true)}
				>Ajouter un article</button
			>
		</div>
	</GenericHero>

	<div class="mt-20" />
</div>
<AddBlogPostModal bind:isAddBlogPostModalOpened />

<style>
</style>
