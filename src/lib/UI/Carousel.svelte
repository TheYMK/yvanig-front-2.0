<script lang="ts">
	import { flip } from 'svelte/animate'
	import { onDestroy } from 'svelte'
	import IslandCard from '../Island/IslandCard.svelte'
	import HeroItem from '../Hero/HeroItem.svelte'
	export let carouselItems: any = null
	// export let itemWidth = 300
	// export let itemSpacing = 20
	export let speed = 500
	// export let controlColor = '#444'
	// export let controlScale = '0.5'
	export let autoplay = false
	export let autoplaySpeed = 5000
	export let displayControls = true
	export let carousel_type = ''
	let interval: any

	const rotateLeft = (e: any) => {
		const transitioningImage = carouselItems[carouselItems.length - 1]
		// @ts-ignore
		document.getElementById(transitioningImage.id).style.opacity = '0'
		carouselItems = [
			carouselItems[carouselItems.length - 1],
			...carouselItems.slice(0, carouselItems.length - 1)
		]
		// @ts-ignore
		setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = '1'), speed)
	}
	const rotateRight = (e: any) => {
		const transitioningImage = carouselItems[0]
		// @ts-ignore
		document.getElementById(transitioningImage.id).style.opacity = '0'
		carouselItems = [...carouselItems.slice(1, carouselItems.length), carouselItems[0]]
		// @ts-ignore
		setTimeout(() => (document.getElementById(transitioningImage.id).style.opacity = '1'), speed)
	}
	const startAutoPlay = () => {
		if (autoplay) {
			interval = setInterval(rotateLeft, autoplaySpeed)
		}
	}
	const stopAutoPlay = () => {
		clearInterval(interval)
	}
	if (autoplay) {
		startAutoPlay()
	}
	onDestroy(() => {
		stopAutoPlay()
	})
</script>

<div id="carousel-container">
	{#if carousel_type === 'islands'}
		<div id="carousel-images">
			{#each carouselItems as item (item.id)}
				<div id={item.id} animate:flip={{ duration: speed }} class="mx-2">
					<IslandCard island_name={item.island_name} />
				</div>
			{/each}
		</div>
	{:else if carousel_type === 'images'}
		<div id="carousel-images">
			{#each carouselItems as item (item.id)}
				<div id={item.id} animate:flip={{ duration: speed }} class="mx-4">
					<HeroItem itemImage={item.path} />
				</div>
			{/each}
		</div>
	{/if}
	{#if displayControls}
		<button id="left" on:click={rotateLeft}>
			<slot name="left-control">
				<div class="tooltip" data-tip="Précédent">
					<div class="rotate-180">
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
							><path
								fill="#ffffff"
								d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"
							/></svg
						>
					</div>
				</div>
			</slot>
		</button>
		<button id="right" on:click={rotateRight}>
			<slot name="right-control">
				<div class="tooltip" data-tip="Suivant">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
						><path
							fill="#ffffff"
							d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"
						/></svg
					>
				</div>
			</slot>
		</button>
	{/if}
</div>

<style>
	#carousel-container {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
	#carousel-images {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		-webkit-mask: linear-gradient(90deg, #000 0%, #fff 100%);
		mask: linear-gradient(90deg, #000 0%, #fff 100%);
	}
	button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
	}
	button:focus {
		outline: auto;
	}
	#left {
		left: 10px;
	}
	#right {
		right: 10px;
	}
</style>
