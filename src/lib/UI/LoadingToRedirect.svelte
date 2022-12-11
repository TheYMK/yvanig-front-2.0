<script>
		// @ts-nocheck
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	export let count = 10

	onMount(() => {
		const interval = setInterval(() => {
			if (count !== 0) count--

			if (count === 0) {
				goto('/')
			}
		}, 500)

		// cleanup
		return () => clearInterval(interval)
	})
</script>

<div id="preloader">
	<div class="jumper">
		<div />
		<div />
		<div />
	</div>
</div>

<style>
	/* Preloaded */
	#preloader {
		overflow: hidden;
		background-image: linear-gradient(135deg, var(--color-base-100) 0%, var(--color-base-100) 100%);
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		position: fixed;
		z-index: 9999;
		color: var(--color-primary);
	}

	#preloader .jumper {
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: block;
		position: absolute;
		margin: auto;
		width: 50px;
		height: 50px;
	}

	#preloader .jumper > div {
		background-color: var(--color-primary);
		width: 10px;
		height: 10px;
		border-radius: 100%;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		position: absolute;
		opacity: 0;
		width: 50px;
		height: 50px;
		-webkit-animation: jumper 1s 0s linear infinite;
		animation: jumper 1s 0s linear infinite;
	}

	#preloader .jumper > div:nth-child(2) {
		-webkit-animation-delay: 0.33333s;
		animation-delay: 0.33333s;
	}

	#preloader .jumper > div:nth-child(3) {
		-webkit-animation-delay: 0.66666s;
		animation-delay: 0.66666s;
	}

	@-webkit-keyframes jumper {
		0% {
			opacity: 0;
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		5% {
			opacity: 1;
		}
		100% {
			-webkit-transform: scale(1);
			transform: scale(1);
			opacity: 0;
		}
	}

	@keyframes jumper {
		0% {
			opacity: 0;
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		5% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
