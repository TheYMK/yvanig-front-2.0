<script>
		// @ts-nocheck
	export let itemImage = ''
</script>

<div class="item">
	<div class="item_wrap">
		<img src={itemImage} class="w-full aspect-square object-cover" alt="carousel 1" />
	</div>
</div>

<!-- markup (zero or more items) goes here -->
<style>
	.item {
		overflow: hidden;
		border-radius: 10px;
		-moz-border-radius: 10px;
		-webkit-border-radius: 10px;
		position: relative;
		-o-transition: 0.7s;
		-ms-transition: 0.7s;
		-moz-transition: 0.7s;
		transition: 0.7s;
		outline: none;
		width: 420px;
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
	}

	.item:hover * {
		-o-transition: 3s;
		-ms-transition: 3s;
		-moz-transition: 3s;
		-webkit-transition: 3s;
		transition: 3s;
		outline: none;
	}

	.item:hover img {
		transform: scale(1.2);
	}

	@media (max-width: 640px) {
		.item {
			width: 320px;
		}
	}

	@media (min-width: 768px) {
		.item {
			width: 380px;
		}
	}
	@media (min-width: 1024px) {
		.item {
			width: 420px;
		}
	}
</style>
