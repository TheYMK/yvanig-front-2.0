<script lang="ts">
	export let label = ''
	export let inputId = ''
	export let isRequired = false
	export let placeholder = ''
	export let type = ''
	export let inputClass = ''
	export let value = ''
</script>

<div class="form-control">
	<label class="label" for={inputId}>
		<span class="label-text text-white font-medium"
			>{label}
			{#if isRequired}
				<span class="text-red-500 ml-1">*</span>
			{/if}</span
		>
	</label>
	<input
		id={inputId}
		{type}
		{placeholder}
		required={isRequired}
		{value}
		on:input
		class={`input bg-white custom-input text-secondary ${inputClass}`}
	/>
</div>

<style>
	.custom-input {
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
		border-top: solid 1px rgba(255, 255, 255, 0.1);
		border-radius: 15px;
	}
</style>
